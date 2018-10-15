//
const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    //
    devServer: {
        contentBase: path.resolve(__dirname, "src"),
        compress: true,
        port: 3000
    },
    //
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery"
        })

    ]
}
