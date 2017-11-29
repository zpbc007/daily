/**
 * 页面中有header头部，nav导航，消息列表，购物车等模块，每个模块都与
 * 异步请求后的用户信息有关联
 */
// 
/**
 * 使用回调函数处理
 * 与各个模块强耦合 知道模块的方法名、参数
 * 添加模块时需要修改方法
 */
login.succ((data) => {
    header.setAvatar(data.avatar)
    nav.setAvatar(data.avatar)
    message.refresh()
    cart.refresh()
})

/**
 * 使用发布-订阅者模式处理
 * 登录与其他模块没有了关联
 */
$.ajax('***', function (data) {
    login.trigger('loginSucc', data)    // 发布登录成功消息
})

// 各个模块监听登录成功的消息
var header = (function () {
    login.listen('loginSucc', (data) => {
        header.setAvatar(data.avatar)
    })
    return {
        setAvatar: function(data) {
            console.log('设置header头像')
        }
    }
})()

var nav = (function () {
    login.listen('loginSucc', (data) => {
        nav.setAvatar(data.avatar)
    })
    return {
        setAvatar: function(data) {
            console.log('设置nav头像')
        }
    }
})()