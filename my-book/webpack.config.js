const merge = require('webpack-merge')

const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const commonConfig = require('./webpack.common.config')

const publicConfig = {
    // enable sourceMap
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*.*']),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5]/css',
            allChunks: true
        }),
        new UglifyJSPlugin(),
    ]
}

module.exports = merge(commonConfig, publicConfig)