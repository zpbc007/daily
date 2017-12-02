var Folder = function (name) {
    this.name = name
    this.parent = null
    this.files = []
}

Folder.prototype.add = function ( file ) {
    file.parent = this
    this.files.push(file)
}

Folder.prototype.scan = function () {
    console.log(`开始扫描文件夹：${this.name}`)
    for(var i = 0, file, files = this.files; file = files[i++];) {
        file.scan()
    }
}

Folder.prototype.remove = function () {
    if (!this.parent) {
        return
    }
    for (var files = this.parent.files, l = files.length - 1; l >= 0; l--) {
        var file = files[l]
        if(file === this) {
            files.splice(l, 1)
        }
    }
}

var File = function (name) {
    this.name = name
    this.parent = null
}

File.prototype.add = function () {
    throw new Error('文件中不能添加文件')
}

File.prototype.scan = function () {
    if (!this.parent) {
        return 
    }
    for (var files = this.parent.files, l = files.length - 1; l > 0; l--) {
        var file = files[l] 
        if (this === file) {
            files.splice(l, 1)
        }
    }
}

var floder = new Folder('学习资料')
var folder1 = new Folder('JavaScript')
var file1 = new Folder('深入浅出node')

folder.add(new File('JavaScript'))
folder.add(folder1)
folder.add(file1)

folder.remove()
folder.scan()