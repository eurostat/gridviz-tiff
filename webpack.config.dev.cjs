// dev
const LiveReloadPlugin = require('webpack-livereload-plugin')

module.exports = {
    mode: 'development',
    output: {
        filename: 'gridviz-tiff.js',
        library: ['gridviz', 'tiff'],
        libraryTarget: 'umd',
    },
    externals: {
        gridviz: {
            root: 'gridviz',
            commonjs: 'gridviz',
            commonjs2: 'gridviz',
            amd: 'gridviz',
        },
    },
    plugins: [new LiveReloadPlugin()],
    watch: true,
    devtool: 'inline-source-map',

    experiments: {
        asyncWebAssembly: true,
        //syncWebAssembly: true
    },
}
