/**
 * @param t 动画已消耗的时间
 * @param b 小球原始位置
 * @param c 小球目标位置
 * @param d 动画持续总时间
 */
var tween = {
    linear(t, b, c, d) {
        return c * t / d + b
    },
    easeIn(t, b, c, d) {
        return c * (t /= d) * t + b
    },
    strongEaseIn: function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    strongEaseOut: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    sineaseIn: function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    sineaseOut: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    }
}

/**
 * 
 * @param {dom} dom 
 */
var Animate = function (dom) {
    this.dom = dom          // 运动的dom节点
    this.startTime = 0      // 动画开始时间
    this.startPos = 0       // dom初始位置
    this.endPos = 0         // dom目标位置
    this.propertyName = null// dom 属性名
    this.easing = null      // 缓动算法
    this.duration = null    // 动画持续时间
}

// 启动方法
Animate.prototype.start = function (propertyName, endPos, duration, easing) {
    this.startTime = +new Date
    this.startPos = this.dom.getBoundingClientRect()[propertyName]
    this.propertyName = propertyName
    this.endPos = endPos
    this.duration = duration
    this.easing = tween[easing]

    var self = this
    var timeId = setInterval(() => {
        if (this.step() === false) {
            clearInterval(timeId)
        }
    }, 19)
}

// 每一帧的逻辑
Animate.prototype.step = function () {
    var t = + new Date
    if (t >= this.startTime + this.duration) {
        this.update(this.endPos)
        return false
    }
    var pos = this.easing(t - this.startTime, this.startPos, this.endPos, this.duration)
    this.update(pos)
}

// 更新位置
Animate.prototype.update = function (pos) {
    this.dom.style[this.propertyName] = pos + 'px'
}