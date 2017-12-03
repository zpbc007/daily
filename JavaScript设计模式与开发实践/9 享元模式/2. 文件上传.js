var id = 0

window.startUpload = function (uploadType, files) {
    for(var i = 0, file; file = files[i++];) {
        var uploadObj = new Upload(uploadType, file.name, file.fileSize)
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