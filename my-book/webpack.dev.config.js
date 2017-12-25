const merge = require('webpack-merge')
const path = require('path')
console.log(merge)

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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
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