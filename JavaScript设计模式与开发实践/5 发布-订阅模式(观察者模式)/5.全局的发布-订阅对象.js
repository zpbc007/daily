/**
 * 之前的发布-订阅模式有两个问题
 * 1. 每个发布者对象都添加了listen和trigger方法以及一个缓存列表clientList,这是一种浪费
 * 2. 订阅者与发布者还存在耦合，订阅者需要知道发布者的名字
 */
var Event = (function () {
    var clientList = {},
        listen,
        trigger,
        remove
    listen = function (key, fn) {
        if (!clientList[key]) {
            clientList[key] = []
        }
        clientList[key].push(fn)
    }

    trigger = function () {
        var key = Array.prototype.shift.call(arguments),
            fns = clientList.key
        if (!fns || fns.length === 0) {
            return false
        }
        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments)
        }
    }

    remove = function (key, fn) {
        var fns = clientList[key]
        if (!fns) {
            return false
        }
        if (!fns) {
            fns && (fns.length = 0 )
        } else {
            for (var l = fns.length - 1; l > 0; i--) {
                var _fn = fns[l]
                if (_fn === fn) {
                    fns.splice(l, 1)
                }
            }
        }
    }

    return {listen, trigger, remove}
})()