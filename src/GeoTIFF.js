//@ts-check
'use strict'

import { Dataset } from 'gridviz'
import { fromUrl } from 'geotiff'

/**
 * A dataset composed of a single GeoTiff file.
 *
 * @module dataset
 * @author Joseph Davies, Julien Gaffuri
 */
export class GeoTIFF extends Dataset {
    /**
     * @param {object} map
     * @param {string} url
     * @param {number} resolution Initial resolution; the GeoTIFF pixel size is used after loading.
     * @param {{preprocess?:function(object):boolean, bands?:number[]}} opts
     */
    constructor(map, url, resolution, opts = {}) {
        super(map, url, resolution, opts)

        /**
         * @private
         * @type {Array.<object>}
         */
        this.cells = []

        /**
         * Zero-based sample indexes to load; undefined means all samples.
         * @type {number[]|undefined}
         * @private
         */
        this.bands = opts.bands

        /**
         * @type {string}
         * @private
         */
        this.infoLoadingStatus = 'notLoaded'

        this.getData()
    }

    /**
     * Load the GeoTIFF once and convert its pixels to GridViz cells.
     * @returns {this}
     */
    getData() {
        if (this.infoLoadingStatus !== 'notLoaded') return this

        this.infoLoadingStatus = 'loading'
        ;(async () => {
            try {
                //similar to what class ParquetGrid from NPM gridviz-parquet plugin does with geotiff.js library
                const tiff = await fromUrl(this.url, { allowFullFile: true })
                const image = await tiff.getImage()
                const sampleCount = image.getSamplesPerPixel()
                const bands =
                    this.bands === undefined
                        ? Array.from({ length: sampleCount }, (_, index) => index)
                        : this.bands

                if (!Array.isArray(bands) || bands.length === 0)
                    throw new Error(
                        'The bands option must be a non-empty array of zero-based sample indexes.'
                    )
                if (bands.some((band) => !Number.isInteger(band) || band < 0 || band >= sampleCount))
                    throw new RangeError(`Band indexes must be integers between 0 and ${sampleCount - 1}.`)
                if (new Set(bands).size !== bands.length)
                    throw new Error('The bands option must not contain duplicate indexes.')

                const metadata = await Promise.all(bands.map((band) => image.getGDALMetadata(band)))
                const bandNames = metadata.map((bandMetadata, index) => {
                    const description = bandMetadata && bandMetadata.DESCRIPTION
                    return typeof description === 'string' && description.length
                        ? description
                        : `band${bands[index] + 1}`
                })
                if (new Set(bandNames).size !== bandNames.length)
                    throw new Error('GeoTIFF band names must be unique to create cell properties.')
                if (bandNames.some((name) => name === 'x' || name === 'y'))
                    throw new Error(
                        'GeoTIFF band names cannot be "x" or "y", which are reserved for cell coordinates.'
                    )

                const [resolutionX, resolutionY] = image.getResolution()
                const cellWidth = Math.abs(resolutionX)
                const cellHeight = Math.abs(resolutionY)
                if (
                    !Number.isFinite(cellWidth) ||
                    !Number.isFinite(cellHeight) ||
                    cellWidth <= 0 ||
                    cellHeight <= 0
                )
                    throw new Error('GeoTIFF pixel dimensions must be finite and greater than zero.')
                if (Math.abs(cellWidth - cellHeight) > Math.max(cellWidth, cellHeight) * 1e-9)
                    throw new Error('GridViz requires square GeoTIFF pixels.')

                const transformation = image.getFileDirectory().getValue('ModelTransformation')
                if (
                    transformation &&
                    (Math.abs(transformation[1]) > cellWidth * 1e-12 ||
                        Math.abs(transformation[4]) > cellHeight * 1e-12)
                )
                    throw new Error('Rotated GeoTIFF images are not supported.')

                const width = image.getWidth()
                const height = image.getHeight()
                const pixelCount = width * height
                const raster = await image.readRasters({ samples: bands })
                if (raster.length !== bands.length || raster.some((band) => band.length !== pixelCount))
                    throw new Error('GeoTIFF raster data does not match the image dimensions.')

                const [originX, originY] = image.getOrigin()
                const isPixelArea = image.getGeoKeys()?.GTRasterTypeGeoKey !== 2
                const noDataValue = image.getGDALNoData()
                const cells = []

                for (let row = 0; row < height; row++) {
                    for (let column = 0; column < width; column++) {
                        const pixel = row * width + column
                        const cell = {
                            x: isPixelArea
                                ? Math.min(
                                      originX + column * resolutionX,
                                      originX + (column + 1) * resolutionX
                                  )
                                : originX + column * resolutionX - cellWidth / 2,
                            y: isPixelArea
                                ? Math.min(originY + row * resolutionY, originY + (row + 1) * resolutionY)
                                : originY + row * resolutionY - cellHeight / 2,
                        }
                        let hasData = false

                        for (let bandIndex = 0; bandIndex < bands.length; bandIndex++) {
                            const value = raster[bandIndex][pixel]
                            const bandNoData = getBandNoData(noDataValue, metadata[bandIndex])
                            const isNoData = Number.isNaN(value) || isNoDataValue(value, bandNoData)
                            cell[bandNames[bandIndex]] = isNoData ? undefined : value
                            if (!isNoData) hasData = true
                        }

                        if (!hasData) continue
                        if (this.preprocess && this.preprocess(cell) === false) continue
                        cells.push(cell)
                    }
                }

                this.resolution = cellWidth
                this.cells = cells
                this.infoLoadingStatus = 'loaded'
                if (this.map) this.map.redraw()
            } catch (error) {
                console.error('Could not load data from ' + this.url)
                console.error(error)
                this.infoLoadingStatus = 'failed'
                this.cells = []
            }
        })()

        return this
    }

    /**
     * Select cells intersecting the current geographic extent.
     * @param {{xMin:number, xMax:number, yMin:number, yMax:number}} extGeo
     */
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

function getBandNoData(globalNoData, metadata) {
    const value = metadata ? metadata.NODATA_VALUE : undefined
    if (value !== undefined) return Number(value)
    return globalNoData
}

function isNoDataValue(value, noDataValue) {
    if (noDataValue === null) return false
    return Number.isNaN(noDataValue) ? Number.isNaN(value) : value === noDataValue
}
