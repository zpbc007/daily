// 计算乘积函数
var mult = function () {
    console.log('开始计算乘积')
    var a = 1
    for (var i = 0, l = arguments.length; i < l; i++) {
        a = a * arguments[i]
    }
    return  a
}

// 计算加和
var plus = function () {
    console.log('开始计算加和')
    var a = 0
    for (var i = 0, l = arguments.length; i < l; i++) {
        a = a + arguments[i]
    }
    return a
}

// 创建缓存代理工厂
var createProxyFactory = function (fn) {
    var cache = {}
    return function () {
        var args = Array.prototype.join.call(arguments, ',')
        if (args in cache) {
            return cache[args]
        }
        return cache[args] = fn.apply(this, arguments)
    }
}

var proxyMult = createProxyFactory(mult)
var proxyPlus = createProxyFactory(plus)