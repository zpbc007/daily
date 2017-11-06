/**
 * File: /Users/zhaopeng/Documents/code/daily/AOP/用AOP改善javascript代码/01.js
 * Project: /Users/zhaopeng/Documents/code/daily/AOP/用AOP改善javascript代码
 * Created Date: 2017-11-02
 * Author: zhao peng
 * -----
 * 上次修改时间: 2017-11-02
 * Modified By: 
 * -----
 * aop round
 */
/**
 * 1. 使用callback
 * 缺点： 每次都需要调用advice
 */ 
let advice = function (originalFunc) {
    console.log('before func')
    originalFunc()
    console.log('after func')
}
let obj = {
    foo: function () {
        console.log('foo')
    }
}
advice(obj.foo)

/**
 * 2. 使用闭包
 * 缺点：this作用域有问题
 */
let advice2 = function (originalFunc) {
    return function () {
        console.log('before func')
        originalFunc()
        console.log('after func')
    }
}
let obj2 = {
    foo: function () {
        console.log('闭包' + this.name)
    },
    name: 'obj2'
}
obj2.foo = advice2(obj2.foo)
obj2.foo()

/**
 * 3. 处理作用域问题
 * 缺点：死循环了
 */
let advice3 = function (originalFunc) {
    return function () {
        console.log('before func')
        originalFunc()
        console.log('after func')
    }
}
let obj3 = {
    foo: function () {
        console.log('闭包' + this.name)
    },
    name: 'obj3'
}
let keepContext = function () {
    return obj3.foo.call(obj3)
}
obj3.foo = advice3(keepContext)
obj3.foo()

/**
 * 4. 消除死循环
 */
let advice4 = function (originalFunc) {
    return function () {
        console.log('before func')
        originalFunc()
        console.log('after func')
    }
}
let obj4 = {
    foo: function () {
        console.log('消除死循环' + this.name)
    },
    name: 'obj4'
}
let exist = obj4.foo
let keepContext = function () {
    return exist.call(obj4)
}
obj4.foo = advice4(keepContext)
obj4.foo()

/**
 * 抽象
 */


