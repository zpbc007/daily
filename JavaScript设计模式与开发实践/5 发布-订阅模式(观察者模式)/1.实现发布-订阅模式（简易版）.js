/**
 * 1.指定好谁充当发布者
 * 2.发布者添加缓存列表，用于存放回调函数以便通知订阅者
 * 3.发布消息的时候，发布者遍历缓存列表，依次触发回调函数
 * 4.向回调函数里添加一些参数
 * 
 * 缺点： 订阅者接收到了所有的消息，而不是他关注的内容
 */
// 发布者
var saleOffices = {}
// 缓存列表
saleOffices.clientList = []
//增加订阅者
saleOffices.listen = function (fn) {
    saleOffices.clientList.push(fn)
}
// 发布消息
saleOffices.trigger = function () {
    for (var i = 0, fn; fn = this.clientList[i++];) {
        fn.apply(this, arguments)
    }
}

// 测试
saleOffices.listen((price, squareMeter) => {
    console.log('订阅者1')
    console.log(`价格：${price}`)
    console.log(`面积${squareMeter}`)
})

saleOffices.listen((price, squareMeter) => {
    console.log('订阅者2')
    console.log(`价格：${price}`)
    console.log(`面积${squareMeter}`)
})

saleOffices.trigger(20000, 88)
saleOffices.trigger(20000, 100)