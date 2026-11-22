import { fromUrl } from 'geotiff'

const tiffs = new Map()

self.addEventListener('message', async ({ data }) => {
    const { id, url, remoteOptions, window, samples } = data
    try {
        const key = JSON.stringify([url, remoteOptions])
        let tiffPromise = tiffs.get(key)
        if (!tiffPromise) {
            tiffPromise = fromUrl(url, remoteOptions)
            tiffs.set(key, tiffPromise)
        }

        const tiff = await tiffPromise
        const image = await tiff.getImage()
        const raster = await image.readRasters({ window, samples })
        self.postMessage(
            { id, raster },
            raster.map((band) => band.buffer)
        )
    } catch (error) {
        self.postMessage({ id, error: String((error && error.message) || error) })
    }
})
