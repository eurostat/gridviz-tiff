//@ts-check
'use strict'

import { Dataset } from 'gridviz'

/**
 * @todo
 * A dataset composed of a single GeoTiff file.
 *
 * @module dataset
 * @author Joseph Davies, Julien Gaffuri
 */
export class GeoTIFF extends Dataset {

    constructor(map, url, resolution, opts = {}) {
        super(map, url, resolution, opts)

        /**
         * @private
         * @type {Array.<object>} */
        this.cells = []

        /**
         * @type {string}
         * @private  */
        this.infoLoadingStatus = 'notLoaded'

        //get data
        this.getData(undefined)

    }

    getData(e) {

        //check if data already loaded
        if (this.infoLoadingStatus != 'notLoaded') return this

        //load data
        this.infoLoadingStatus = 'loading';
        (async () => {
            try {

                //const res = await fetch(this.url)
                //TODO fetch geotiff file and load cell data

            } catch (error) {
                console.error("Could not load data from " + this.url);
                console.error(error)
                //mark as failed
                this.infoLoadingStatus = 'failed'
                this.cells = []
            }
        })()

        return this
    }



    updateViewCache(extGeo) {
        //data not loaded yet
        if (!this.cells) return

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
