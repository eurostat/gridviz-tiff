//@ts-check
'use strict'

import { Dataset } from 'gridviz'

/**
 * @todo
 * A dataset composed of a COGeo file.
 * @see https://www.cogeo.org/
 *
 * @module dataset
 * @author Joseph Davies, Julien Gaffuri
 */
export class COGeo extends Dataset {
    constructor(map, url, resolution, opts = {}) {
        super(map, url, resolution, opts)
    }

    //TODO

}
