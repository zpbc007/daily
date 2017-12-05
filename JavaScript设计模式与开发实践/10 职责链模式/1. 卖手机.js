/**
 * 订单
 * @param {String} orderType 订单类型 1：500，2:200，3:普通
 * @param {Boolean} pay true: 完成定金支付
 * @param {Number} stock 库存数量 
 */
var order = function (orderType, pay, stock) {
    if (orderType === 1) {
        if (pay === true) {
            console.log('500定金，得到100优惠券')
        } else {
            if (stock > 0) {
                console.log('普通购买，无优惠')
            } else {
                console.log('库存不足无法购买')
            }
        }
    } else if (orderType === 2 ) {
        if (pay === true) {
            console.log('200定金，得到50优惠券')
        } else {
            if (stock > 0) {
                console.log('普通购买，无优惠')
            } else {
                console.log('库存不足无法购买')
            }
        }

    } else if (orderType === 3) {
        if (stock > 0) {
            console.log('普通购买，无优惠')
        } else {
            console.log('库存不足无法购买')
        }
    }
}

//test
order(1, true, 500)