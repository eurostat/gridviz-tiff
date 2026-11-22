const WORKER_COUNT = 2
const workers = []
const requests = new Map()
let nextWorker = 0
let nextRequest = 0
let workersFailed = typeof Worker === 'undefined'

function useMainThread(request) {
    request.image
        .readRasters({ window: request.window, samples: request.samples })
        .then(request.resolve, request.reject)
}

function disableWorkers() {
    workersFailed = true
    for (const worker of workers) worker.terminate()
    workers.length = 0

    const pending = [...requests.values()]
    requests.clear()
    for (const request of pending) useMainThread(request)
}

function getWorkers() {
    if (workersFailed) return undefined
    if (workers.length) return workers

    try {
        for (let index = 0; index < WORKER_COUNT; index++) {
            const worker = new Worker(new URL('./COGeoTileWorker.js', import.meta.url), {
                type: 'module',
            })
            worker.onerror = disableWorkers
            worker.onmessageerror = disableWorkers
            worker.onmessage = ({ data }) => {
                const request = requests.get(data.id)
                if (!request) return
                requests.delete(data.id)
                if (data.error) request.reject(new Error(data.error))
                else request.resolve(data.raster)
            }
            workers.push(worker)
        }
    } catch (error) {
        disableWorkers()
        return undefined
    }
    return workers
}

/**
 * Read one complete TIFF tile. The worker's GeoTIFF decoder also performs
 * compressed-tile decoding off the main thread.
 */
export function readTile(url, remoteOptions, image, window, samples) {
    const request = { image, window, samples }
    const pool = getWorkers()
    if (!pool) {
        return new Promise((resolve, reject) => useMainThread({ ...request, resolve, reject }))
    }

    return new Promise((resolve, reject) => {
        const id = nextRequest++
        const worker = pool[nextWorker]
        nextWorker = (nextWorker + 1) % pool.length
        requests.set(id, { ...request, resolve, reject })
        try {
            worker.postMessage({ id, url, remoteOptions, window, samples })
        } catch (error) {
            disableWorkers()
        }
    })
}
