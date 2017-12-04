/**
 * 每个类型的上传对象只会有一个
 */
var id = 0

window.startUpload = function (uploadType, files) {
    for(var i = 0, file; file = files[i++];) {
        uploadManager.add(++id, uploadType, file.fileName, file.fileSize)
    }
}

// 只存放可以被共享的数据
var Upload = function(uploadType, fileName, fileSize) {
    this.uploadType = uploadType
}

Upload.prototype.delFile = function (id) {
    // 读取文件实际大小
    uploadManager.setExternalState(id, this)
    if (this.fileSize < 3000 ) {
        return this.dom.parentNode.removeChild(this.dom)
    }
    if (window.confirm(`确定删除文件么:${this.fileName}`)){
        return this.dom.parentNode.removeChild(this.dom)
    }
}

// 工厂
var UploadFactory = (function () {
    var createdFlyWeightObjs = {}

    return {
        create: function (uploadType) {
            if (createdFlyWeightObjs[uploadType]) {
                return createdFlyWeightObjs[uploadType]
            }
            return createdFlyWeightObjs[uploadType] = new Upload(uploadType)
        }
    }
})()

// 管理器封装外部状态
var uploadManager = (function (){
    var uploadDatabase = {}

    return {
        add: function (id, uploadType, fileName, fileSize) {
            var flyWeightObj = UploadFactory.create(uploadType)

            var dom = document.createElement('div')
            dom.innerHTML = `<span>文件名称${fileName}, 文件大小：${fileSize}</span>
                                <button class="delFile">删除</button>`
            dom.querySelector('.delFile').onclick = function () {
                flyWeightObj.delFile(id)
            }
            document.body.appendChild(dom)

            uploadDatabase[id] = {
                fileName: fileName,
                fileSize: fileSize,
                dom: dom
            }

            return flyWeightObj
        },
        setExternalState: function (id, flyWeightObj) {
            var uploadData = uploadDatabase[id]
            for (var i in uploadData){
                flyWeightObj[i] = uploadData[i]
            }
        }
    }
})()

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