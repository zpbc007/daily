/**
 * File: /Users/zhaopeng/Documents/code/daily/AOP/js AOP的实现/01.js
 * Project: /Users/zhaopeng/Documents/code/daily/AOP/js AOP的实现
 * Created Date: 2017-11-02
 * Author: zhao peng
 * -----
 * 上次修改时间: 2017-11-02
 * Modified By: 
 * -----
 * 哈哈哈哈隔
 */
// 在某个实例方法的前面或者后面织入通知函数
// 缺点会立即执行
function Person () {
    this.say = function () {
        console.log('say')
    }
    this.cry = function () {
        console.log('cry')
    }
    this.round = function () {
        console.log('round')
    }
}

let Aspects = function () {}
Aspects.prototype = {
    before: function (target, method, advice) {
        (advice)()
        for (let i in target) {
            if (i == method) {
                target[i]()
            }
        }
    },
    after: function (target, method, advice) {
        for (let i in target) {
            if (i == method) {
                target[i]()
            }
        }
        (advice)()
    },
    around: function (target, method, advice) {
        (advice)()
        for (let i in target) {
            if (i == method) {
                target[i]()
            }
        }
        (advice)()
    }
}
window.onload = function () {
    var t = new Person
    var a = new Aspects
    a.before(t, 'say', function () {console.log('before say')})
    a.after(t, 'cry', function () {console.log('after say')})
    t.say()
}