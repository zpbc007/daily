// 通用的获取单例的方法
var getSingle = function (fn) {
    var result = null
    return function () {
        return result || (result = fn.apply(this, arguments))
    }
}

// 创建悬浮框的方法与单例无关
var createLoginLayer = function () {
    var div = document.createElement('div')
    div.innerHTML = '悬浮框'
    div.style.display = 'none'
    document.body.appendChild(div)
    return div
}

// 创建单例悬浮框
var createSingleLoginLayer = getSingle(createLoginLayer)

document.getElementById('loginBtn').onclick = function () {
    var loginLayer = createSingleLoginLayer()
    loginLayer.style.display = 'block'
}