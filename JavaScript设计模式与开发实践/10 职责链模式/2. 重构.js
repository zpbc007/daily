/**
 * 缺点：链条僵硬 添加麻烦
 * @param {*} orderType 
 * @param {*} pay 
 * @param {*} stock 
 */
var order500 = function (orderType, pay, stock){
    if (orderType === 1 && pay === true ) {
        console.log('500定金，得到100优惠券')
    } else {
        order200(orderType, pay, stock)
    }
} 

var order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
        console.log('200定金，得到50优惠券')
    } else {
        orderNormal(orderType, pay, stock)
    }
}

var orderNormal = function (orderType, pay, stock) {
    if (stock > 0) {
        console.log('普通购买，无优惠')
    } else {
        console.log('库存不足无法购买')
    }
}