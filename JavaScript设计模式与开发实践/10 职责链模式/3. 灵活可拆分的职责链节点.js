/**
 * 可以自由灵活的增加、移除修改链中的节点顺序
 * @param {*} orderType 
 * @param {*} pay 
 * @param {*} stock 
 */
var order500 = function (orderType, pay, stock){
    if (orderType === 1 && pay === true ) {
        console.log('500定金，得到100优惠券')
    } else {
        return 'nextSuccessor'
    }
} 

var order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
        console.log('200定金，得到50优惠券')
    } else {
        return 'nextSuccessor'
    }
}

var orderNormal = function (orderType, pay, stock) {
    if (stock > 0) {
        console.log('普通购买，无优惠')
    } else {
        console.log('库存不足无法购买')
    }
}

var Chain = function (fn) {
    this.fn = fn
    this.successor = null
}
// 指定在链中的下一个节点
Chain.prototype.setNextSuccessor = function (successor) {
    return this.successor = successor
}
// 传递请求给某一节点
Chain.prototype.passRequest = function () {
    var ret = this.fn.apply(this, arguments)
    if (ret === 'nextSuccessor') {
        return this.successor && this.passRequest.apply(this.successor, arguments)
    }
    return ret
}

// test
// 将函数包装为职责链节点
var chainOrder200 = new Chain(order200)
var chainOrder500 = new Chain(order500)
var chainOrderNoraml = new Chain(orderNormal)

// 指定顺序
chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNoraml)

chainOrder500.passRequest(1, true, 500)
