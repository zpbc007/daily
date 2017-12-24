const path = require('path')
// 自动生成index.html
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    // 入口
    entry: {
        app: [
            'babel-polyfill',
            // 热更新 同时保存页面state
            'react-hot-loader/patch',
            path.resolve(__dirname, './src/index.jsx'),
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    // 输出
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    // enable sourceMap
    devtool: 'inline-source-map',
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
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 8085,
        historyApiFallback: true
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
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
            template: 'src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
}