# gridviz-tiff

![npm bundle size](https://img.shields.io/bundlephobia/minzip/gridviz-tiff)
![npm](https://img.shields.io/npm/v/gridviz-tiff)
![license](https://img.shields.io/badge/license-EUPL-success)

[GeoTIFF](https://www.ogc.org/fr/standards/geotiff/) and [COG](https://cogeo.org/) format support for [GridViz](https://github.com/eurostat/gridviz/).

## GeoTIFF dataset

`GeoTIFF` loads a single GeoTIFF image into GridViz cells. Raster pixels must use
the same projection as the map and have square, unrotated pixels. The pixel size
from the GeoTIFF is used as the dataset resolution.

```js
import { GeoTIFF } from 'gridviz-tiff'

const dataset = new GeoTIFF(map, '/data/temperature.tif', 100, {
    bands: [0, 2],
})
```

`bands` is an optional array of zero-based sample indexes; when omitted, all
bands are loaded. Each cell has `x` and `y` coordinates and one property per
loaded band. GDAL band descriptions are used as property names when present;
otherwise names such as `band1` and `band2` are used. Pixels with NoData in every
loaded band are omitted. For a pixel with NoData in only some bands, those band
properties are set to `undefined`. The inherited `preprocess` option can filter
or transform the resulting cells.

## Demo

The demo in [`examples/geotiff.html`](./examples/geotiff.html) displays
[`examples/test.tif`](./examples/test.tif) and lets you color the raster by
either band. Build the browser bundle and serve the repository root over HTTP:

```sh
npm run bp
python3 -m http.server 8000
```

Then open `http://localhost:8000/examples/geotiff.html`.

## COGeo demo

The demo in [`examples/cogeo.html`](./examples/cogeo.html) loads the public
Eurostat 100 m COGeo raster in EPSG:3035 and requests only the raster window
intersecting the current map view. It exposes the `n1` and `n5` bands and allows
both values to be inspected on hover.

## Cloud-optimized GeoTIFF

`COGeo` has the same bands and preprocessing API as `GeoTIFF`, but it requests
only the part of the image intersecting the current map view:

```js
import { COGeo } from 'gridviz-tiff'

const dataset = new COGeo(map, '/data/cloud-optimized.tif', 100, {
    bands: [0, 2],
})
```

`COGeo` reads the intersecting native TIFF tiles, caches recently used tiles,
and reads them in web workers when available. It falls back to main-thread
reads when workers are unavailable. Cell coordinates remain aligned to the
base image grid.
