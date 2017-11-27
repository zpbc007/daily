// 算法封装在策略类里面
var performanceS = function () {}
performanceS.prototype.calculate = function (salary) {
    return salary * 4
}

var performanceA = function () {}
performanceS.prototype.calculate = function (salary) {
    return salary * 3
}

var performanceB = function () {}
performanceS.prototype.calculate = function (salary) {
    return salary * 2
}

// 奖金类
var Bonus = function () {
    this.salary = null
    this.strategy = null
}

Bonus.prototype.setSalary = function (salary) {
    this.salary = salary
}

Bonus.prototype.setStrategy = function (strategy) {
    this.strategy = strategy
}

Bonus.prototype.getBonus = function () {
    return this.strategy.calculate(this.salary)
}

