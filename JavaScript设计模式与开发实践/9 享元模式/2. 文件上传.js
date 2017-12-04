/**
 * 有多少文件就会创建多少了upload对象
 */
var id = 0

window.startUpload = function (uploadType, files) {
    for(var i = 0, file; file = files[i++];) {
        var uploadObj = new Upload(uploadType, file.fileName, file.fileSize)
        uploadObj.init(id++)
    }
}

var Upload = function(uploadType, fileName, fileSize) {
    this.uploadType = uploadType
    this.fileName = fileName
    this.fileSize = fileSize
    this.dom = null
}

Upload.prototype.init = function (id) {
    var that = this
    this.id = id
    this.dom = document.createElement('div')
    this.dom.innerHTML = `<span>文件名称${this.fileName}, 文件大小：${this.fileSize}</span>
                        <button class="delFile">删除</button>`
    this.dom.querySelector('.delFile').onclick = function () {
        that.delFile()
    }
    document.body.appendChild(this.dom)
}

Upload.prototype.delFile = function () {
    if (this.fileSize < 3000 ) {
        return this.dom.parentNode.removeChild(this.dom)
    }
    if (window.confirm(`确定删除文件么:${this.fileName}`)){
        return this.dom.parentNode.removeChild(this.dom)
    }
}

// test
startUpload('plugin', [
    {
        fileName: '1.txt',
        fileSize: '1000'
    },
    {
        fileName: '2.txt',
        fileSize: '3000'
    },
    {
        fileName: '3.txt',
        fileSize: '5000'
    }
])

startUpload('flash', [
    {
        fileName: '1.html',
        fileSize: '1000'
    },
    {
        fileName: '2.html',
        fileSize: '3000'
    },
    {
        fileName: '3.html',
        fileSize: '5000'
    }
])