// 图片对象 对外提供setSrc方法设置url
var myImage = (function () {
    var imgNode = document.createElement('img')
    document.body.appendChild(imgNode)

    return {
        setSrc: function (scr) {
            imgNode.src = src
        }
    }
})()

// 会有一段时间的空白
myImage.setSrc('imageURL')

var proxyImage = (function () {
    var img = new Image
    img.onload = function () {
        myImage.setSrc(this.src)
    }
    return {
        setSrc: function (src) {
            myImage.setSrc('loadingURL')
            img.src = src
        }
    }
})()

proxyImage.setSrc('imageURL')