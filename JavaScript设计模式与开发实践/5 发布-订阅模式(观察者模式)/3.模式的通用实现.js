var event = {
    clientList: {},
    listen: function (key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = []
        }
        this.clientList[key].push(fn)
    },
    trigger: function () {
        var key = Array.prototype.shift.call(arguments),
            fns = this.clientList[key]
        
        if (!fns || fns.length === 0) {
            return false
        }

        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments)
        }
    },
    // 取消订阅事件
    remove: function (key, fn) {
        var fns = this.clientList[key]
        // 没有人订阅
        if (!fns) {
            return false
        }
        // 如果没有传入具体的回调函数，取消key对应消息的所有订阅
        if (!fn) {
            fns && (fns.length = 0)
        } else {
            for (var l = fns.length - 1; l >= 0; l--) {
                var _fn = fns[l]
                if (_fn === fn) {
                    // 删除回调函数
                    fns.splice(l, 1)
                }
            }
        }
    } 
}

// 给对象动态安装发布-订阅功能
var installEvent = function (obj) {
    for (var i in event) {
        obj[i] = event[i]
    }
}

var saleOffices = {}
installEvent(saleOffices)

let type1Fn = (price) => {
    console.log(`type:type1, price:${price}`)
}
saleOffices.listen('type1', type1Fn)
saleOffices.listen('type2', (price) => {
    console.log(`type:type2, price:${price}`)
})

saleOffices.trigger('type1', 2000)
saleOffices.trigger('type2', 4000)

saleOffices.remove('type1', type1Fn)
saleOffices.trigger('type1', 2000)