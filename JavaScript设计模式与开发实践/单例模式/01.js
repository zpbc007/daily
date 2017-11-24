/**
 * 通过Singleton.getInstance方法来获取唯一对象。
 * 缺点： 使用者必须知道Singleton为单例类，且只能使用getInstance方法
 *        得到对象
 */

/**
 *  方法1
 *  在对象Singleton中添加instance属性来判断是否已经创建了对象
 */
var Singleton = function (name) {
    this.name = name
    this.instance = null
}

Singleton.prototype.getName = function () {
    return this.name
}

Singleton.getInstance = function (name) {
    // 通过instance属性来判断是否已经创建
    if (!this.instance) {
        this.instance = new Singleton(name)
    }
    return this.instance
}

/**
 * 方法2
 * 将instance属性移出，通过getInstance的闭包来保存是否已经创建了对象
 */
var Singleton = function (name) {
    this.name = name
}

Singleton.prototype.getName = function () {
    return this.name
}

Singleton.getInstance = (function (name) {
    var instance = null
    return function (name) {
        if (!instance) {
            instance = new Singleton(name)
        }
        return instance
    }
})()
