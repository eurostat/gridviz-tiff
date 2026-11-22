//@ts-check
'use strict'

import { Dataset } from 'gridviz'
import { fromUrl } from 'geotiff'
import { readTile } from './COGeoTileReader.js'

/**
 * A dataset composed of a COGeo file.
 * @see https://www.cogeo.org/
 *
 * @module dataset
 * @author Joseph Davies, Julien Gaffuri
 */
export class COGeo extends Dataset {
    /**
     * @param {import('gridviz').Map} map
     * @param {string} url
     * @param {number} resolution Initial resolution; the COG pixel size is used after loading.
     * @param {{
     *  preprocess?:function(object):boolean,
     *  bands?:number[],
     *  headers?:Record<string,string>,
     *  credentials?:RequestCredentials,
     *  maxRanges?:number,
     *  remoteOptions?:{headers?:Record<string,string>,credentials?:RequestCredentials,maxRanges?:number}
     * }} opts
     */
    constructor(map, url, resolution, opts = {}) {
        super(map, url, resolution, opts)
        this.remoteOptions = opts.remoteOptions || opts

        /** @type {Array.<COGeoCell>} */
        this.cells = []

        /** @type {number[]|undefined} */
        this.bands = opts.bands

        /** @type {string} */
        this.infoLoadingStatus = 'notLoaded'

        /** @type {string} */
        this.dataLoadingStatus = 'notLoaded'

        /** @type {any} */
        this.tiff = undefined

        /** @type {any} */
        this.image = undefined

        /** @type {COGeoRasterInfo|undefined} */
        this.rasterInfo = undefined

        /** @type {Map<string, Array.<any>>} */
        this.tileCache = new Map()

        /** @type {Map<string, Promise<Array.<any>>>} */
        this.pendingTiles = new Map()

        /** @type {{xMin:number,xMax:number,yMin:number,yMax:number}|undefined} */
        this.pendingView = undefined
        this.viewGeneration = 0

        this.getData()
    }

    /** @returns {this} */
    getData(extGeo = undefined) {
        if (extGeo) this.pendingView = extGeo

        if (this.infoLoadingStatus === 'notLoaded') {
            this.infoLoadingStatus = 'loading'
            ;(async () => {
                try {
                    const remoteOptions = {
                        allowFullFile: false,
                        ...(this.remoteOptions.headers ? { headers: this.remoteOptions.headers } : {}),
                        ...(this.remoteOptions.credentials
                            ? { credentials: this.remoteOptions.credentials }
                            : {}),
                        ...(Number.isInteger(this.remoteOptions.maxRanges)
                            ? { maxRanges: this.remoteOptions.maxRanges }
                            : {}),
                    }
                    this.tiff = await fromUrl(
                        this.url,
                        remoteOptions
                    )
                    this.image = await this.tiff.getImage()
                    const bandCount = this.image.getSamplesPerPixel()
                    const bands =
                        this.bands === undefined
                            ? Array.from({ length: bandCount }, (_, index) => index)
                            : this.bands

                    validateBands(bands, bandCount)
                    const metadata = await Promise.all(bands.map((band) => this.image.getGDALMetadata(band)))
                    const bandNames = metadata.map((bandMetadata, index) => {
                        const description = bandMetadata && bandMetadata.DESCRIPTION
                        return typeof description === 'string' && description.length
                            ? description
                            : `band${bands[index] + 1}`
                    })
                    validateBandNames(bandNames)

                    const [resolutionX, resolutionY] = this.image.getResolution()
                    validateRaster(resolutionX, resolutionY, this.image)

                    this.rasterInfo = {
                        count: bands.length,
                        names: bandNames,
                        noData: this.image.getGDALNoData(),
                        metadata,
                    }
                    this.bands = bands

                    const cellWidth = Math.abs(resolutionX)
                    //console.log(`COGeo pixel size: ${cellWidth} x ${Math.abs(resolutionY)}`)
                    this.resolution = cellWidth
                    this.infoLoadingStatus = 'loaded'

                    if (this.pendingView) this.loadView(this.pendingView)
                    if (this.map) this.map.redraw()
                } catch (error) {
                    if (error && error.name === 'AbortError') return
                    console.error('Could not load metadata from ' + this.url)
                    console.error(error)
                    this.infoLoadingStatus = 'failed'
                    this.cells = []
                }
            })()
        } else if (this.infoLoadingStatus === 'loaded' && extGeo) {
            this.loadView(extGeo)
        }

        return this
    }

    /**
     * @param {{xMin:number,xMax:number,yMin:number,yMax:number}} extGeo
     * @returns {Promise<void>}
     */
    async loadView(extGeo) {
        if (!this.image || !this.rasterInfo || !this.bands) return

        const generation = ++this.viewGeneration
        const bbox = getClippedBoundingBox(this.image, extGeo)
        if (!bbox) {
            this.cells = []
            this.cellsViewCache = []
            this.dataLoadingStatus = 'loaded'
            return
        }

        this.dataLoadingStatus = 'loading'

        try {
            const [originX, originY] = this.image.getOrigin()
            const [resolutionX, resolutionY] = this.image.getResolution()
            const isPixelArea = this.image.getGeoKeys()?.GTRasterTypeGeoKey !== 2
            const window = getPixelWindow(
                originX,
                originY,
                resolutionX,
                resolutionY,
                this.image.getWidth(),
                this.image.getHeight(),
                bbox
            )

            if (!window) {
                this.cells = []
                this.cellsViewCache = []
                this.dataLoadingStatus = 'loaded'
                return
            }

            const tileWidth = this.image.getTileWidth()
            const tileHeight = this.image.getTileHeight()
            if (
                !Number.isInteger(tileWidth) ||
                tileWidth <= 0 ||
                !Number.isInteger(tileHeight) ||
                tileHeight <= 0
            )
                throw new Error('COGeo image tile dimensions must be positive integers.')
            const minTileX = Math.floor(window[0] / tileWidth)
            const maxTileX = Math.ceil(window[2] / tileWidth)
            const minTileY = Math.floor(window[1] / tileHeight)
            const maxTileY = Math.ceil(window[3] / tileHeight)
            const remoteOptions = getRemoteOptions(this.remoteOptions)
            const tileTasks = []
            for (let tileY = minTileY; tileY < maxTileY; tileY++) {
                for (let tileX = minTileX; tileX < maxTileX; tileX++) {
                    tileTasks.push({ tileX, tileY })
                }
            }

            const cells = []
            for (let index = 0; index < tileTasks.length; index += 4) {
                const batch = tileTasks.slice(index, index + 4)
                const rasters = await Promise.all(
                    batch.map(({ tileX, tileY }) =>
                        this.getTile(tileX, tileY, tileWidth, tileHeight, remoteOptions)
                    )
                )
                if (generation !== this.viewGeneration) return

                for (let tileIndex = 0; tileIndex < batch.length; tileIndex++) {
                    const { tileX, tileY } = batch[tileIndex]
                    const raster = rasters[tileIndex]
                    const tileWindow = getTileWindow(
                        tileX,
                        tileY,
                        tileWidth,
                        tileHeight,
                        this.image.getWidth(),
                        this.image.getHeight()
                    )
                    const tileCells = cellsFromRaster({
                        raster,
                        tileWindow,
                        window,
                        originX,
                        originY,
                        resolutionX,
                        resolutionY,
                        isPixelArea,
                        bands: this.bands,
                        rasterInfo: this.rasterInfo,
                        preprocess: this.preprocess,
                    })
                    cells.push(...tileCells)
                }
            }

            this.cells = cells
            this.dataLoadingStatus = 'loaded'
            this.updateViewCache(extGeo)
            if (this.map) this.map.redraw()
        } catch (error) {
            if (generation !== this.viewGeneration) return
            console.error('Could not load view from ' + this.url)
            console.error(error)
            this.dataLoadingStatus = 'failed'
            this.cells = []
        }
    }

    /**
     * @param {number} tileX
     * @param {number} tileY
     * @param {number} tileWidth
     * @param {number} tileHeight
     * @param {object} remoteOptions
     * @returns {Promise<Array.<any>>}
     */
    getTile(tileX, tileY, tileWidth, tileHeight, remoteOptions) {
        const bands = this.bands
        if (!bands) throw new Error('COGeo bands have not been initialized.')
        const key = `${tileX},${tileY}`
        if (this.tileCache.has(key)) {
            const raster = this.tileCache.get(key)
            if (!raster) throw new Error('Cached COGeo tile is unavailable.')
            this.tileCache.delete(key)
            this.tileCache.set(key, raster)
            return Promise.resolve(raster)
        }
        const pendingRequest = this.pendingTiles.get(key)
        if (pendingRequest) return pendingRequest

        const window = getTileWindow(
            tileX,
            tileY,
            tileWidth,
            tileHeight,
            this.image.getWidth(),
            this.image.getHeight()
        )
        const request = readTile(this.url, remoteOptions, this.image, window, bands)
        const tilePromise = request.then(
            (raster) => {
                if (!Array.isArray(raster) || raster.length !== bands.length)
                    throw new Error('COGeo tile data does not match the selected bands.')
                const pixelCount = (window[2] - window[0]) * (window[3] - window[1])
                if (raster.some((band) => band.length !== pixelCount))
                    throw new Error('COGeo tile data does not match its dimensions.')
                this.tileCache.set(key, raster)
                while (this.tileCache.size > 64) {
                    const oldest = this.tileCache.keys().next().value
                    if (oldest === undefined) break
                    this.tileCache.delete(oldest)
                }
                return raster
            }
        ).finally(() => {
            if (this.pendingTiles.get(key) === tilePromise) this.pendingTiles.delete(key)
        })
        this.pendingTiles.set(key, tilePromise)
        return tilePromise
    }

    /** @param {{xMin:number,xMax:number,yMin:number,yMax:number}} extGeo */
    updateViewCache(extGeo) {
        this.cellsViewCache = []
        for (const cell of this.cells) {
            if (+cell.x + this.resolution < extGeo.xMin) continue
            if (+cell.x - this.resolution > extGeo.xMax) continue
            if (+cell.y + this.resolution < extGeo.yMin) continue
            if (+cell.y - this.resolution > extGeo.yMax) continue
            this.cellsViewCache.push(cell)
        }
    }

}



function validateBands(bands, sampleCount) {
    if (!Array.isArray(bands) || bands.length === 0)
        throw new Error('The bands option must be a non-empty array of zero-based sample indexes.')
    if (bands.some((band) => !Number.isInteger(band) || band < 0 || band >= sampleCount))
        throw new RangeError(`Band indexes must be integers between 0 and ${sampleCount - 1}.`)
    if (new Set(bands).size !== bands.length)
        throw new Error('The bands option must not contain duplicate indexes.')
}

function validateBandNames(bandNames) {
    if (new Set(bandNames).size !== bandNames.length)
        throw new Error('COGeo band names must be unique to create cell properties.')
    if (bandNames.some((name) => name === 'x' || name === 'y'))
        throw new Error('COGeo band names cannot be "x" or "y", which are reserved for cell coordinates.')
}

function validateRaster(resolutionX, resolutionY, image) {
    const cellWidth = Math.abs(resolutionX)
    const cellHeight = Math.abs(resolutionY)
    if (!Number.isFinite(cellWidth) || !Number.isFinite(cellHeight) || cellWidth <= 0 || cellHeight <= 0)
        throw new Error('COGeo pixel dimensions must be finite and greater than zero.')
    if (Math.abs(cellWidth - cellHeight) > Math.max(cellWidth, cellHeight) * 1e-9)
        throw new Error('GridViz requires square COGeo pixels.')
    const transformation = image.getFileDirectory().getValue('ModelTransformation')
    if (
        transformation &&
        (Math.abs(transformation[1]) > cellWidth * 1e-12 ||
            Math.abs(transformation[4]) > cellHeight * 1e-12)
    )
        throw new Error('Rotated COGeo images are not supported.')
}

/**
 * @param {any} image
 * @param {{xMin:number,xMax:number,yMin:number,yMax:number}} extGeo
 * @returns {[number,number,number,number]|undefined}
 */
function getClippedBoundingBox(image, extGeo) {
    const bbox = image.getBoundingBox()
    if (!Array.isArray(bbox) || bbox.length !== 4) return undefined
    const xMin = Math.max(extGeo.xMin, bbox[0])
    const xMax = Math.min(extGeo.xMax, bbox[2])
    const yMin = Math.max(extGeo.yMin, bbox[1])
    const yMax = Math.min(extGeo.yMax, bbox[3])
    if (xMin >= xMax || yMin >= yMax) return undefined
    return [xMin, yMin, xMax, yMax]
}

/**
 * @typedef {{x:number,y:number,[key:string]:any}} COGeoCell
 * @typedef {{count:number,names:string[],noData:any,metadata:Array.<Record<string,any>|null>}} COGeoRasterInfo
 */

/**
 * @param {{headers?:Record<string,string>,credentials?:RequestCredentials,maxRanges?:number}} options
 * @returns {object}
 */
function getRemoteOptions(options) {
    return {
        allowFullFile: false,
        ...(options.headers ? { headers: options.headers } : {}),
        ...(options.credentials ? { credentials: options.credentials } : {}),
        ...(Number.isInteger(options.maxRanges) ? { maxRanges: options.maxRanges } : {}),
    }
}

/**
 * @param {number} tileX
 * @param {number} tileY
 * @param {number} tileWidth
 * @param {number} tileHeight
 * @param {number} imageWidth
 * @param {number} imageHeight
 * @returns {[number,number,number,number]}
 */
function getTileWindow(tileX, tileY, tileWidth, tileHeight, imageWidth, imageHeight) {
    const xMin = tileX * tileWidth
    const yMin = tileY * tileHeight
    return [
        xMin,
        yMin,
        Math.min(xMin + tileWidth, imageWidth),
        Math.min(yMin + tileHeight, imageHeight),
    ]
}

/**
 * @param {{
 *  raster:Array.<ArrayLike<number>>,
 *  tileWindow:[number,number,number,number],
 *  window:[number,number,number,number],
 *  originX:number,
 *  originY:number,
 *  resolutionX:number,
 *  resolutionY:number,
 *  isPixelArea:boolean,
 *  bands:number[],
 *  rasterInfo:COGeoRasterInfo,
 *  preprocess?:function(COGeoCell):boolean
 * }} options
 * @returns {Array.<COGeoCell>}
 */
function cellsFromRaster({
    raster,
    tileWindow,
    window,
    originX,
    originY,
    resolutionX,
    resolutionY,
    isPixelArea,
    bands,
    rasterInfo,
    preprocess,
}) {
    if (!Array.isArray(raster) || raster.length !== bands.length)
        throw new Error('COGeo tile data does not match the selected bands.')

    const tileWidth = tileWindow[2] - tileWindow[0]
    const tileHeight = tileWindow[3] - tileWindow[1]
    if (raster.some((band) => band.length !== tileWidth * tileHeight))
        throw new Error('COGeo tile data does not match its dimensions.')

    const xStart = Math.max(tileWindow[0], window[0])
    const yStart = Math.max(tileWindow[1], window[1])
    const xStop = Math.min(tileWindow[2], window[2])
    const yStop = Math.min(tileWindow[3], window[3])
    /** @type {Array.<COGeoCell>} */
    const cells = []

    for (let y = yStart; y < yStop; y++) {
        for (let x = xStart; x < xStop; x++) {
            const pixel = (y - tileWindow[1]) * tileWidth + x - tileWindow[0]
            const left = originX + x * resolutionX
            const top = originY + y * resolutionY
            const cell = /** @type {COGeoCell} */ ({
                x: snapIntegerNoise(
                    isPixelArea ? Math.min(left, left + resolutionX) : left - Math.abs(resolutionX) / 2
                ),
                y: snapIntegerNoise(
                    isPixelArea ? Math.min(top, top + resolutionY) : top - Math.abs(resolutionY) / 2
                ),
            })
            let hasData = false

            for (let bandIndex = 0; bandIndex < bands.length; bandIndex++) {
                const value = raster[bandIndex][pixel]
                const bandNoData = getBandNoData(rasterInfo.noData, rasterInfo.metadata[bandIndex])
                const isNoData = Number.isNaN(value) || isNoDataValue(value, bandNoData)
                cell[rasterInfo.names[bandIndex]] = isNoData ? undefined : value
                if (!isNoData) hasData = true
            }

            if (!hasData) continue
            if (preprocess && preprocess(cell) === false) continue
            cells.push(cell)
        }
    }
    return cells
}

/** @param {number} value */
function snapIntegerNoise(value) {
    const nearestInteger = Math.round(value)
    return Math.abs(value - nearestInteger) < 1e-9 ? nearestInteger : value
}

/**
 * @param {number} originX
 * @param {number} originY
 * @param {number} resolutionX
 * @param {number} resolutionY
 * @param {number} width
 * @param {number} height
 * @param {[number,number,number,number]} bbox
 * @returns {[number,number,number,number]|undefined}
 */
function getPixelWindow(originX, originY, resolutionX, resolutionY, width, height, bbox) {
    const columns = [
        (bbox[0] - originX) / resolutionX,
        (bbox[2] - originX) / resolutionX,
    ]
    const rows = [
        (bbox[1] - originY) / resolutionY,
        (bbox[3] - originY) / resolutionY,
    ]
    const xMin = Math.max(0, Math.floor(Math.min(...columns)))
    const xMax = Math.min(width, Math.ceil(Math.max(...columns)))
    const yMin = Math.max(0, Math.floor(Math.min(...rows)))
    const yMax = Math.min(height, Math.ceil(Math.max(...rows)))
    if (xMin >= xMax || yMin >= yMax) return undefined
    return [xMin, yMin, xMax, yMax]
}

function getBandNoData(globalNoData, metadata) {
    const value = metadata ? metadata.NODATA_VALUE : undefined
    if (value !== undefined) return Number(value)
    return globalNoData
}

function isNoDataValue(value, noDataValue) {
    if (noDataValue === null) return false
    return Number.isNaN(noDataValue) ? Number.isNaN(value) : value === noDataValue
}
