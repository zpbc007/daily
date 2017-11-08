const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
// 删除未被引用的export
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        // 每次build前清理文件夹
        new CleanWebpackPlugin(['dist']),
        // 设定输出的html
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new UglifyJSPlugin(),
        // 热更新
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
}