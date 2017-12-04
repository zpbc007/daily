var objectPoolFactory = function (createObjFn) {
    var objectPool = []

    return {
        create: function () {
            var obj = objectPool.length === 0 ? 
                createObjFn.apply(this, arguments) : objectPool.shift()  
            return obj
        },
        recover: function (obj) {
            objectPool.push(obj)
        }
    }
} 

var iframeFactory = objectPoolFactory(function () {
    var iframe = document.createElement('iframe')
        document.body.appendChild(iframe)
    
    iframe.onload = function () {
        iframe.onload = null
        iframeFactory.recover(iframe)
    }

    return iframe
})

var iframe1 = iframeFactory.create()
iframe1.src = 'https://www.baidu.com/'

var iframe2 = iframeFactory.create()
iframe1.src = 'https://www.google.com'

setTimeout(function () {
    var iframe3 = iframeFactory.create()
    iframe1.src = 'http://localhost:3001/layoutContent/03'
}, 3000)