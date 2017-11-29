/**
 * 添加一个标示key
 */
// 发布者
var saleOffices = {}
// 缓存列表
saleOffices.clientList = {}
//增加订阅者
saleOffices.listen = function (key, fn) {
    if (!this.clientList[key]) {    // 如果之前没有订阅过此类消息
        this.clientList[key] = [] 
    }
    this.clientList[key].push(fn)   // 加入缓存列表
}
// 发布消息
saleOffices.trigger = function () {
    var key = Array.prototype.shift.call(arguments), //取出消息类型
        fns = this.clientList[key]  //取出该类型对应的回调函数集合
    
    if (!fns || fns.length === 0) { // 没有订阅该消息
        return false
    }
    for (var i = 0, fn; fn = fns[i++];) {
        fn.apply(this, arguments)
    }
}

// 测试
saleOffices.listen('type1', (price, squareMeter) => {
    console.log('订阅者1')
    console.log(`价格：${price}`)
    console.log(`面积${squareMeter}`)
})

saleOffices.listen('type2', (price, squareMeter) => {
    console.log('订阅者2')
    console.log(`价格：${price}`)
    console.log(`面积${squareMeter}`)
})

saleOffices.trigger('type1',20000, 88)
saleOffices.trigger('type2', 20000, 100)