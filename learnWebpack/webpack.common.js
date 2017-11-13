const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        // 每次build前清理文件夹
        new CleanWebpackPlugin(['dist']),
        // 设定输出的html
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
}