var pkg = require('./package.json')
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'app/index.jsx'),
        vendor: Object.keys(pkg.dependencies)
    },
    output: {
        path: __dirname + '/build',
        filename: "./js/[name].[chunkhash:8].js" 
    },
    // 引用文件不加后缀名会在数组中查找添加之
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        // 处理不同文件
        loaders: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader') },
            { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') },
            { test: /\.(png|gif|jpg|jpeg|bmp)$/i, loader: 'url-loader?limit=5000&name=img/[name].[chunkhash:8].[ext]' },// 限制大小5kb
            { test: /\.(png|woff|woff2|svg|tts|eot)($|\?)/i, loader: 'url-loader?limit=5000&name=fonts/[name].[chunkhash:8]'}
        ]
    },
    plugins: [
        new webpack.BannerPlugin("Copyrightby ZhaoPeng"),
        // html模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),
        // 编译React压缩到最小
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        // 为组建分配Id
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }), 
        // 分离css和js文件
        new ExtractTextPlugin('/css/[name].[chunkhash:8].css'),
        // 提取公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: './js/[name].[chunkhash:8].js'
        }),
        // 业务代码中提供__DEV__全局变量 判断是否是DEV模式
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV === 'dev') || 'false'))
        })
    ]
}