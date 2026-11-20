//@ts-check
'use strict'

import { Dataset } from 'gridviz'
import { fromUrl } from 'geotiff'

/**
 * A dataset composed of a COGeo file.
 * @see https://www.cogeo.org/
 *
 * @module dataset
 * @author Joseph Davies, Julien Gaffuri
 */
export class COGeo extends Dataset {
    /**
     * @param {object} map
     * @param {string} url
     * @param {number} resolution Initial resolution; the COG pixel size is used after loading.
     * @param {{preprocess?:function(object):boolean, bands?:number[], headers?:object, credentials?:RequestCredentials, maxRanges?:number}} opts
     */
    constructor(map, url, resolution, opts = {}) {
        super(map, url, resolution, opts)
        this.remoteOptions = opts.remoteOptions || opts

        /** @type {Array.<object>} */
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

        /** @type {{count:number,names:string[],noData:any} | undefined} */
        this.rasterInfo = undefined

        /** @type {Map<string, Array.<object>>} */
        this.viewCache = new Map()

        /** @type {AbortController|undefined} */
        this.abortController = undefined

        /** @type {{xMin:number,xMax:number,yMin:number,yMax:number}|undefined} */
        this.pendingView = undefined

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
                    this.abortController = new AbortController()
                    this.tiff = await fromUrl(
                        this.url,
                        remoteOptions,
                        this.abortController.signal
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
        if (!this.image || !this.rasterInfo) return

        const bbox = getClippedBoundingBox(this.image, extGeo)
        if (!bbox) {
            this.cells = []
            this.cellsViewCache = []
            return
        }

        const key = [
            bbox[0].toPrecision(12),
            bbox[1].toPrecision(12),
            bbox[2].toPrecision(12),
            bbox[3].toPrecision(12),
        ].join(',')
        if (this.viewCache.has(key)) {
            this.cells = this.viewCache.get(key) || []
            this.updateViewCache(extGeo)
            if (this.map) this.map.redraw()
            return
        }

        this.cancelCurrentRequests()
        this.abortController = new AbortController()
        this.dataLoadingStatus = 'loading'

        try {
            const [originX, originY] = this.image.getOrigin()
            const [fullResolutionX, fullResolutionY] = this.image.getResolution()
            const imageCount = await this.tiff.getImageCount()
            const selectedImage = await getBestImage(
                this.tiff,
                imageCount,
                this.resolution,
                fullResolutionX,
                fullResolutionY
            )
            const [resolutionX, resolutionY] = selectedImage.getResolution(this.image)
            const isPixelArea = this.image.getGeoKeys()?.GTRasterTypeGeoKey !== 2
            const window = getPixelWindow(
                originX,
                originY,
                resolutionX,
                resolutionY,
                selectedImage.getWidth(),
                selectedImage.getHeight(),
                bbox
            )

            if (!window) {
                this.cells = []
                this.cellsViewCache = []
                this.dataLoadingStatus = 'loaded'
                return
            }

            const raster = await selectedImage.readRasters({
                window,
                samples: this.bands,
                signal: this.abortController.signal,
            })
            if (this.abortController.signal.aborted) return
            if (!Array.isArray(raster) || raster.length !== this.bands.length)
                throw new Error('COGeo raster data does not match the selected bands.')

            const width = window[2] - window[0]
            const height = window[3] - window[1]
            const pixelCount = width * height
            if (raster.some((band) => band.length !== pixelCount))
                throw new Error('COGeo raster data does not match the image window.')

            const cells = []
            for (let row = 0; row < height; row++) {
                for (let column = 0; column < width; column++) {
                    const pixel = row * width + column
                    const cell = {
                        x: isPixelArea
                            ? Math.min(
                                  originX + (window[0] + column) * resolutionX,
                                  originX + (window[0] + column + 1) * resolutionX
                              )
                            : originX + (window[0] + column) * resolutionX - Math.abs(resolutionX) / 2,
                        y: isPixelArea
                            ? Math.min(
                                  originY + (window[1] + row) * resolutionY,
                                  originY + (window[1] + row + 1) * resolutionY
                              )
                            : originY + (window[1] + row) * resolutionY - Math.abs(resolutionY) / 2,
                    }
                    let hasData = false

                    for (let bandIndex = 0; bandIndex < this.bands.length; bandIndex++) {
                        const value = raster[bandIndex][pixel]
                        const bandNoData = getBandNoData(
                            this.rasterInfo.noData,
                            this.rasterInfo.metadata[bandIndex]
                        )
                        const isNoData = Number.isNaN(value) || isNoDataValue(value, bandNoData)
                        cell[this.rasterInfo.names[bandIndex]] = isNoData ? undefined : value
                        if (!isNoData) hasData = true
                    }

                    if (!hasData) continue
                    if (this.preprocess && this.preprocess(cell) === false) continue
                    cells.push(cell)
                }
            }

            if (this.viewCache.size >= 20) {
                const oldest = this.viewCache.keys().next().value
                if (oldest) this.viewCache.delete(oldest)
            }
            this.viewCache.set(key, cells)
            this.cells = cells
            this.dataLoadingStatus = 'loaded'
            this.updateViewCache(extGeo)
            if (this.map) this.map.redraw()
        } catch (error) {
            if (error && error.name === 'AbortError') return
            console.error('Could not load view from ' + this.url)
            console.error(error)
            this.dataLoadingStatus = 'failed'
            this.cells = []
        }
    }

    cancelCurrentRequests() {
        if (this.abortController) this.abortController.abort()
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

async function getBestImage(tiff, imageCount, desiredResolution) {
    const allImages = []
    for (let index = 0; index < imageCount; index++) {
        const image = await tiff.getImage(index)
        const subfileType = image.fileDirectory.getValue('SubfileType')
        const newSubfileType = image.fileDirectory.getValue('NewSubfileType')
        if (index === 0 || subfileType === 2 || (newSubfileType || 0) & 1)
            allImages.push(image)
    }
    allImages.sort((a, b) => a.getWidth() - b.getWidth())

    const firstImage = allImages[0]
    let selected = firstImage
    for (const image of allImages) {
        selected = image
        const imageResolution = Math.abs(image.getResolution(firstImage)[0])
        if (desiredResolution > imageResolution) break
    }
    return selected
}

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
