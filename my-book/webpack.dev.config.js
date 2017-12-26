const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const commonConfig = require('./webpack.common.config')

const devConfig = {
    // enable sourceMap
    devtool: 'inline-source-map',
    // 入口
    entry: {
        app: [
            'babel-polyfill',
            // 热更新 同时保存页面state
            'react-hot-loader/patch',
            path.resolve(__dirname, './src/index.jsx'),
        ],
    },
    // 输出
    output: {
        filename: '[name].[hash].js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 8085,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            MOCK: true
        })
    ]
}

module.exports = merge({
    customizeArray(a, b, key) {
        // entry.app 不合并 全部替换
        if (key === 'entry.app') {
            return b
        }
        return undefined
    }
})(commonConfig, devConfig)