/**
 * File: d:\zpcenter\daily\learnWebpack\server.js
 * Project: d:\zpcenter\daily\learnWebpack
 * Created Date: 2017-11-08
 * Author: ZhaoPeng
 * -----
 * 上次修改时间: 2017-11-08
 * Modified By: 
 * -----
 * express服务端
 */
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n')
})