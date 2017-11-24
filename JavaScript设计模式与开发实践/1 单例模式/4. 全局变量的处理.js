/**
 * 使用命名空间
 */
// 1.对象字面量方式
var namespace1 = {
    a: function () {
        console.log('a')
    },
    b: function () {
        console.log('b')
    }
}

// 动态创建命名空间
let MyApp = {}

MyApp.nameSpace = function (name) {
    var parts = name.split('.')
    var current = MyApp
    for (let i in parts) {
        if (!current[parts[i]]) {
            current[parts[i]] = {}
        }
        current= current[parts[i]]
    }
}

/**
 * 使用闭包封装私有变量
 */
var user = (function () {
    let _name = 'sven',
        _age = 56
    return {
        getUserInfo: function () {
            return _name + '-' + _age
        }
    }
})()

