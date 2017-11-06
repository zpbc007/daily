/**
 * File: d:\zpcenter\daily\AOP\Javascript aop(面向切面编程)之around(环绕)\01.js
 * Project: d:
 * Created Date: 2017-11-02
 * Author: ZhaoPeng
 * -----
 * 上次修改时间: 2017-11-02
 * Modified By: 
 * -----
 * AOP 环绕
 */

// 使用回调
let advice = function (originalFunc) {
    console.log('before function')
    originalFunc()
    console.log('after function')
}
var obj = {
    foo: () => {
        console.log('使用回调')
    }
}
advice(obj.foo)

// 闭包 闭包内this有问题
let advice2 = function (originalFunc) {
    return function () {
        console.log('before function')
        originalFunc()
        console.log('after function')
    }
}
var obj = {
    foo: () => {
        console.log('使用闭包' + this.name)
    },
    name: 'obj'
}
obj.foo = advice2(obj.foo)
obj.foo()

// 处理作用域问题
let advice3 = function (originalFunc) {
    debugger
    return function () {
        debugger
        console.log('before function')
        originalFunc()
        console.log('after function')
    }
}
var obj = {
    foo: () => {
        debugger
        console.log('处理作用域问题' + this.name)
    },
    name: 'obj'
}
keepContext = function () {
    debugger
    return obj.foo.call(obj)
}
debugger
obj.foo = advice3(keepContext)
obj.foo()