var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var autoprefixer = require('autoprefixer')

module.exports = {
    entry: path.resolve(__dirname, 'app/index.jsx'),
    output: {
        filename: "bundle.js"
    },
    // 引用文件不加后缀名会在数组中查找添加之
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            app: path.resolve(__dirname, './app'),
            components: 'app/components',
            containers: 'app/containers' 
        }
    },
    module: {
        // 处理不同文件
        loaders: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.less$/, exclude: /node_modules/, loader: 'style-loader!css-loader!postcss-loader!less-loader' },
            { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader!postcss-loader' },
            { test: /\.(png|gif|jpg|jpeg|bmp)$/i, loader: 'url-loader?limit=5000' },// 限制大小5kb
            { test: /\.(png|woff|woff2|svg|tts|eot)($|\?)/i, loader: 'url-loader?limit=5000'}
        ],
    },
    plugins: [
        // html模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),
        // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8081'
        }),
        // 业务代码中提供__DEV__全局变量 判断是否是DEV模式
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV === 'dev') || 'false'))
        }),
        new webpack.LoaderOptionsPlugin({
            postcss: function () {
                return [autoprefixer]// css自动加前缀
            },
            devServer: {
                colors: true, // 终端输出为彩色
                historyApiFallback: true, // 不跳转
                inline: true, // 实时刷新,
                hot: true, // 使用热加载插件,
            }
        })
    ],
    devServer: {
        port: 8081
    }
}