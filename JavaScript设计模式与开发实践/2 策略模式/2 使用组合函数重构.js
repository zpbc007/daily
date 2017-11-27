var performanceS = function (salary) {
    return salary * 4
}

var performanceA = function (salary) {
    return salary * 3
}

var performanceB = function (salary) {
    return salary * 2
}

/**
 * 拆分出一个个算法的函数
 *      缺点：if else 的逻辑依然还在函数内部
 * @param {*} level 
 */
var calculateBonus = function (level) {
    if (level === S) {
        return performanceS(level)
    }
    if (level === A) {
        return performanceA(level)
    }
    if (level === B) {
        return performanceB(level)
    }
}