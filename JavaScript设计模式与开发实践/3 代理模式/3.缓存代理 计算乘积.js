// 计算乘积函数
var mult = function () {
    console.log('开始计算')
    var a = 1
    for (var i = 0, l = arguments.length; i < l; i++) {
        a = a * arguments[i]
    }
    return  a
}

// 代理乘积函数
var proxyMult = (function () {
    var cache = {}
    return function () {
        var args = Array.prototype.join.call(arguments, ',')
        if (args in cache) {
            return cache[args]
        }
        return cache[args] = mult.apply(this, arguments)
    }
})()

