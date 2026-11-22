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
jest.mock('../src/COGeoTileReader.js', () => ({
    readTile: (url, remoteOptions, image, window, samples) => image.readRasters({ window, samples }),
}))

import { fromUrl } from 'geotiff'
import { COGeo } from '../src/COGeo.js'

async function waitForStatus(dataset, status, property = 'infoLoadingStatus') {
    for (let attempt = 0; attempt < 20 && dataset[property] !== status; attempt++)
        await new Promise((resolve) => setTimeout(resolve, 0))
}

function createImage() {
    return {
        getSamplesPerPixel: () => 2,
        getGDALMetadata: async (band) => (band === 0 ? { DESCRIPTION: 'temperature' } : null),
        getResolution: () => [10, -10],
        getFileDirectory: () => ({
            getValue: () => undefined,
        }),
        getWidth: () => 20,
        getHeight: () => 20,
        getTileWidth: () => 2,
        getTileHeight: () => 2,
        getOrigin: () => [100, 300],
        getBoundingBox: () => [100, 100, 300, 300],
        getGeoKeys: () => ({ GTRasterTypeGeoKey: 1 }),
        getGDALNoData: () => -9999,
        fileDirectory: {
            getValue: () => undefined,
        },
        readRasters: jest.fn(async ({ window, samples }) => {
            const width = window[2] - window[0]
            const height = window[3] - window[1]
            const pixelCount = width * height
            return samples.map((sample) =>
                sample === 0 ? new Float32Array(pixelCount).fill(1) : new Float32Array(pixelCount).fill(5)
            )
        }),
    }
}

beforeEach(() => {
    jest.clearAllMocks()
    const image = createImage()
    fromUrl.mockResolvedValue({
        getImage: async () => image,
        getImageCount: async () => 1,
    })
})

test('loads metadata and only the raster window within the view', async () => {
    const map = { redraw: jest.fn() }
    const image = createImage()
    fromUrl.mockResolvedValue({
        getImage: async () => image,
        getImageCount: async () => 1,
    })
    const dataset = new COGeo(map, '/data.tif', 1, { bands: [1, 0] })
    await waitForStatus(dataset, 'loaded')
    await dataset.getData({ xMin: 120, xMax: 140, yMin: 220, yMax: 240 })
    await waitForStatus(dataset, 'loaded', 'dataLoadingStatus')

    expect(fromUrl).toHaveBeenCalledWith('/data.tif', { allowFullFile: false })
    expect(dataset.resolution).toBe(10)
    expect(dataset.infoLoadingStatus).toBe('loaded')
    expect(dataset.cells).toHaveLength(2 * 2)
    expect(dataset.cells[0]).toEqual({
        x: 120,
        y: 230,
        band2: 5,
        temperature: 1,
    })
    dataset.updateViewCache({ xMin: 500, xMax: 510, yMin: 500, yMax: 510 })
    expect(dataset.getViewCache()).toHaveLength(0)

    expect(image.readRasters).toHaveBeenCalledTimes(1)
    expect(image.readRasters).toHaveBeenCalledWith({
        window: [2, 6, 4, 8],
        samples: [1, 0],
    })
    expect(dataset.cells.every((cell) => Number.isInteger(cell.x) && Number.isInteger(cell.y))).toBe(true)

    await dataset.getData({ xMin: 120, xMax: 140, yMin: 220, yMax: 240 })
    await waitForStatus(dataset, 'loaded', 'dataLoadingStatus')
    expect(image.readRasters).toHaveBeenCalledTimes(1)
})

test('loads and caches only tiles intersecting the requested view', async () => {
    const image = createImage()
    fromUrl.mockResolvedValue({
        getImage: async () => image,
        getImageCount: async () => 1,
    })

    const dataset = new COGeo({ redraw: jest.fn() }, '/data.tif', 100)
    await waitForStatus(dataset, 'loaded')
    await dataset.getData({ xMin: 140, xMax: 160, yMin: 220, yMax: 240 })
    await waitForStatus(dataset, 'loaded', 'dataLoadingStatus')

    expect(image.readRasters).toHaveBeenCalledTimes(1)
    expect(image.readRasters).toHaveBeenCalledWith({
        window: [4, 6, 6, 8],
        samples: [0, 1],
    })

    await dataset.getData({ xMin: 140, xMax: 160, yMin: 220, yMax: 240 })
    await waitForStatus(dataset, 'loaded', 'dataLoadingStatus')
    expect(image.readRasters).toHaveBeenCalledTimes(1)

    await dataset.getData({ xMin: 160, xMax: 180, yMin: 220, yMax: 240 })
    await waitForStatus(dataset, 'loaded', 'dataLoadingStatus')
    expect(image.readRasters).toHaveBeenCalledTimes(2)
})
