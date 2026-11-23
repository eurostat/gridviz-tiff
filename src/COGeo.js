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
        // Keep transport settings separate from GridViz options such as preprocessing.
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
        // A new view invalidates work started by an older, superseded view.
        this.viewGeneration = 0

        this.getData()
    }

    /** @returns {this} */
    getData(extGeo = undefined) {
        // Remember the requested area if metadata loading is still in progress.
        if (extGeo) this.pendingView = extGeo

        // Metadata is loaded once; subsequent calls only request a view update.
        if (this.infoLoadingStatus === 'notLoaded') {
            this.infoLoadingStatus = 'loading'
            ;(async () => {
                try {
                    // GeoTIFF range requests need to avoid downloading the whole file.
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
                    // Select all image bands unless the caller provides an explicit subset.
                    const bands =
                        this.bands === undefined
                            ? Array.from({ length: bandCount }, (_, index) => index)
                            : this.bands

                    validateBands(bands, bandCount)
                    // GDAL metadata supplies descriptive names and per-band no-data values.
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

                    //console.log(this.rasterInfo)

                    // GridViz uses one resolution value, so validate that pixels are square.
                    const cellWidth = Math.abs(resolutionX)
                    //console.log(`COGeo pixel size: ${cellWidth} x ${Math.abs(resolutionY)}`)
                    this.resolution = cellWidth
                    this.infoLoadingStatus = 'loaded'

                    // Load an area that arrived while metadata was loading.
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

        // Ignore results from this load if a newer view request has started.
        const generation = ++this.viewGeneration
        // Restrict the requested rectangle to the raster's geographic bounds.
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
            // Pixel-area rasters use the grid corner as the cell position; point rasters use the pixel center.
            const isPixelArea = this.image.getGeoKeys()?.GTRasterTypeGeoKey !== 2
            // Convert the geographic bounding box into a half-open pixel window.
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

            //console.log(this.image.getOrigin())
            //console.log(`COGeo tile size: ${tileWidth} x ${tileHeight}`)

            if (
                !Number.isInteger(tileWidth) ||
                tileWidth <= 0 ||
                !Number.isInteger(tileHeight) ||
                tileHeight <= 0
            )
                throw new Error('COGeo image tile dimensions must be positive integers.')
            // Find every COG tile intersecting the requested pixel window.
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
            // Limit concurrent tile reads while preserving deterministic tile and cell processing.
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
                    // Clip and convert only the visible portion of each raster tile.
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

            // Publish the complete result only after all batches pass validation.
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
        // Refresh recently used entries and serve cached tile data immediately.
        if (this.tileCache.has(key)) {
            const raster = this.tileCache.get(key)
            if (!raster) throw new Error('Cached COGeo tile is unavailable.')
            this.tileCache.delete(key)
            this.tileCache.set(key, raster)
            return Promise.resolve(raster)
        }
        // Multiple view requests can share one in-flight read for the same tile.
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
                // Validate the returned shape before using it to build cells.
                if (!Array.isArray(raster) || raster.length !== bands.length)
                    throw new Error('COGeo tile data does not match the selected bands.')
                const pixelCount = (window[2] - window[0]) * (window[3] - window[1])
                if (raster.some((band) => band.length !== pixelCount))
                    throw new Error('COGeo tile data does not match its dimensions.')
                this.tileCache.set(key, raster)
                // Keep the cache bounded by evicting the least recently used tile.
                while (this.tileCache.size > 64) {
                    const oldest = this.tileCache.keys().next().value
                    if (oldest === undefined) break
                    this.tileCache.delete(oldest)
                }
                return raster
            }
        ).finally(() => {
            // Remove the completed promise only if it is still this tile's latest request.
            if (this.pendingTiles.get(key) === tilePromise) this.pendingTiles.delete(key)
        })
        this.pendingTiles.set(key, tilePromise)
        return tilePromise
    }

    /** @param {{xMin:number,xMax:number,yMin:number,yMax:number}} extGeo */
    updateViewCache(extGeo) {
        this.cellsViewCache = []
        // Keep only cells whose grid area overlaps the current view.
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
    // Zero-based TIFF sample indexes must be valid and unambiguous.
    if (!Array.isArray(bands) || bands.length === 0)
        throw new Error('The bands option must be a non-empty array of zero-based sample indexes.')
    if (bands.some((band) => !Number.isInteger(band) || band < 0 || band >= sampleCount))
        throw new RangeError(`Band indexes must be integers between 0 and ${sampleCount - 1}.`)
    if (new Set(bands).size !== bands.length)
        throw new Error('The bands option must not contain duplicate indexes.')
}

function validateBandNames(bandNames) {
    // Names become GridViz cell properties, so they must be unique and cannot shadow coordinates.
    if (new Set(bandNames).size !== bandNames.length)
        throw new Error('COGeo band names must be unique to create cell properties.')
    if (bandNames.some((name) => name === 'x' || name === 'y'))
        throw new Error('COGeo band names cannot be "x" or "y", which are reserved for cell coordinates.')
}

function validateRaster(resolutionX, resolutionY, image) {
    // GridViz requires uniformly spaced, square pixels and rejects affine rotations.
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
    // Intersect the requested view with the image footprint before converting to pixels.
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
    // Clamp the final tile to the image edge, since edge tiles may be partial.
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

    // Limit raster iteration to the intersection of this tile and the requested pixel window.
    const xStart = Math.max(tileWindow[0], window[0])
    const yStart = Math.max(tileWindow[1], window[1])
    const xStop = Math.min(tileWindow[2], window[2])
    const yStop = Math.min(tileWindow[3], window[3])
    /** @type {Array.<COGeoCell>} */
    const cells = []

    for (let y = yStart; y < yStop; y++) {
        for (let x = xStart; x < xStop; x++) {
            // Raster arrays are flat, so convert the pixel's row and column into a linear index.
            const pixel = (y - tileWindow[1]) * tileWidth + x - tileWindow[0]
            const left = originX + x * resolutionX
            const top = originY + y * resolutionY
            const cell = /** @type {COGeoCell} */ ({
                // Pixel-area values use a corner; point values use the pixel center.
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
                // Map each TIFF band to a named property on the GridViz cell.
                cell[rasterInfo.names[bandIndex]] = isNoData ? undefined : value
                if (!isNoData) hasData = true
            }

            // Skip pixels with no valid band values, then apply the optional user filter.
            if (!hasData) continue
            if (preprocess && preprocess(cell) === false) continue
            cells.push(cell)
        }
    }
    return cells
}

/** @param {number} value */
function snapIntegerNoise(value) {
    // Remove floating-point noise only when the result is effectively an integer.
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
    // Transform both geographic axes, then normalize and clamp the resulting pixel bounds.
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
    // Per-band GDAL metadata takes precedence over the TIFF-wide no-data value.
    const value = metadata ? metadata.NODATA_VALUE : undefined
    if (value !== undefined) return Number(value)
    return globalNoData
}

function isNoDataValue(value, noDataValue) {
    if (noDataValue === null) return false
    return Number.isNaN(noDataValue) ? Number.isNaN(value) : value === noDataValue
}
