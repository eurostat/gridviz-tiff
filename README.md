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
