/**
 * 使用自执行的匿名函数返回构造方法
 * 缺点：1.返回的构造函数职责过多
 *      2.代码不清晰
 */
var CreateDiv = (function () {
    var instance = null

    /**
     * 构造函数既要保证单例，又在创建第一个对象的时候执行初始化方法，不好
     */
    var CreateDiv = function (html) {
        if (instance) {
            return instance
        }
        this.html = html
        this.init()
        return instance = this
    }

    CreateDiv.prototype.init = function () {
        var div = document.createElement('div')
        div.innerHTML = this.html
        document.body.appendChild(div)
    }

    return CreateDiv
})()