jest.mock('gridviz', () => ({
    Dataset: class {
        constructor(map, url, resolution, opts = {}) {
            this.map = map
            this.url = url
            this.resolution = resolution
            this.preprocess = opts.preprocess
            this.cellsViewCache = []
        }

        getViewCache() {
            return this.cellsViewCache
        }
    },
}))
jest.mock('geotiff', () => ({ fromUrl: jest.fn() }))

import { fromUrl } from 'geotiff'
import { GeoTIFF } from '../src/GeoTIFF.js'

async function waitForLoad(dataset) {
    for (let attempt = 0; attempt < 20 && dataset.infoLoadingStatus === 'loading'; attempt++)
        await new Promise((resolve) => setTimeout(resolve, 0))
}

function createImage() {
    return {
        getSamplesPerPixel: () => 2,
        getGDALMetadata: async (band) => (band === 0 ? { DESCRIPTION: 'temperature' } : null),
        getResolution: () => [10, -10],
        getFileDirectory: () => ({ getValue: () => undefined }),
        getWidth: () => 2,
        getHeight: () => 2,
        readRasters: async ({ samples }) =>
            samples.map((sample) =>
                sample === 0 ? new Float32Array([1, -9999, NaN, -9999]) : new Float32Array([5, 6, 7, -9999])
            ),
        getOrigin: () => [100, 200],
        getGeoKeys: () => ({ GTRasterTypeGeoKey: 1 }),
        getGDALNoData: () => -9999,
    }
}

beforeEach(() => {
    jest.clearAllMocks()
    fromUrl.mockResolvedValue({ getImage: async () => createImage() })
})

test('loads selected bands, maps NoData, and omits pixels with no values', async () => {
    const map = { redraw: jest.fn() }
    const dataset = new GeoTIFF(map, '/data.tif', 1, { bands: [1, 0] })
    await waitForLoad(dataset)

    expect(dataset.infoLoadingStatus).toBe('loaded')
    expect(dataset.resolution).toBe(10)
    expect(dataset.cells).toHaveLength(3)
    expect(dataset.cells[0]).toEqual({
        x: 100,
        y: 190,
        band2: 5,
        temperature: 1,
    })
    expect(dataset.cells[1].temperature).toBeUndefined()
    expect(dataset.cells[2].temperature).toBeUndefined()
    expect(dataset.cells[2].band2).toBe(7)
    expect(map.redraw).toHaveBeenCalledTimes(1)

    dataset.updateViewCache({ xMin: 500, xMax: 510, yMin: 500, yMax: 510 })
    expect(dataset.getViewCache()).toHaveLength(0)
})

test('loads all bands when the bands option is omitted', async () => {
    const dataset = new GeoTIFF({ redraw: jest.fn() }, '/data.tif', 1)
    await waitForLoad(dataset)

    expect(fromUrl).toHaveBeenCalledWith('/data.tif')
    expect(dataset.cells[0]).toHaveProperty('temperature', 1)
    expect(dataset.cells[0]).toHaveProperty('band2', 5)
})
