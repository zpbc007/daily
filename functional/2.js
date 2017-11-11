/**
 * File: d:\zpcenter\daily\functional\2.js
 * Project: d:
 * Created Date: 2017-11-11
 * Author: ZhaoPeng
 * -----
 * 上次修改时间: 2017-11-11
 * Modified By: 
 * -----
 */
// 传入callback,将调用ajax返回的json传入callback
var getServerStuff = function (callback) {
    return ajaxCall(function (json) {
        return callback(json)
    })
}

// 等价于
getServerStuff = ajaxCall
