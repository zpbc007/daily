var toolTipFactory = (function () {
    var toolTipPool = []

    return {
        create: function () {
            if (toolTipPool.length === 0) {
                var div = document.createElement('div')
                document.body.appendChild(div)
                return div
            } else {
                return toolTipPool.shift()
            }
        },
        recover: function (tooltipDom) {
            return toolTipPool.push(tooltipDom)
        }
    }
}
)()

var ary = []

// 创建两个节点
function create2Div () {
    for (var i = 0, str; str = ['A', 'B'][i++];){
        var toolTip = toolTipFactory.create()
        toolTip.innerHTML = str
        ary.push(toolTip)
    }
}

// 回收节点
function removeDiv() {
    for (var i = 0, toolTip; toolTip = ary[i++];) {
        toolTipFactory.recover(toolTip)
    }
} 

// 创建6个节点
function create6Div () {
    for (var i = 0, str; str = ['A', 'B', 'C', 'D', 'E', 'F'][i++];){
        var toolTip = toolTipFactory.create()
        toolTip.innerHTML = str
        ary.push(toolTip)
    }
}