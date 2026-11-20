module.exports = {
    mode: 'production',
    output: {
        filename: 'gridviz-tiff.min.js',
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
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        babelrc: false,
                        cacheDirectory: true,
                        sourceMaps: false,
                    },
                },
            },
        ],
    },
    devtool: false,
    watch: false,
    optimization: {
        usedExports: true,
        minimize: true,
    },

    experiments: {
        asyncWebAssembly: true,
        //syncWebAssembly: true
    },
}
