const path = require('path')
// 自动生成index.html
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const commonConfig = {
    // 入口
    entry: {
        app: [
            'babel-polyfill',
            path.resolve(__dirname, './src/index.jsx'),
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    // 输出
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html')
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            pages: path.resolve(__dirname, './src/pages'),
            component: path.resolve(__dirname, './src/component'),
            router: path.resolve(__dirname, './src/router'),
            actions: path.resolve(__dirname, './src/redux/actions'),
            reducers: path.resolve(__dirname, './src/redux/reducers'),
            reduxPath: path.resolve(__dirname, './src/redux')
        }
    }
}

module.exports = commonConfig