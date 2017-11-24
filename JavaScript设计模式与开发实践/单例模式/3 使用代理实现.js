var CreateDiv = function (html) {
    this.html = html
    this.init()
}

CreateDiv.prototype.init = function () {
    var div = document.createElement('div')
    div.innerHTML = this.html
    document.body.appendChild(div)
}

/**
 * 引用代理类，负责单例逻辑
 */
var ProxySingletonCreateDiv = (function () {
        let instance = null
        return function (html) {
            if (!instance) {
                instance = new CreateDiv(html)
            }
            return instance
        }
    })()