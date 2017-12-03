/**
 * 父类 饮料
 * 未实现的方法由子类实现
 */
var Beverage = function () {}

Beverage.prototype.boilWater = function () {
    console.log('把水煮沸')
}

Beverage.prototype.brew = function () {
    throw new Error('子类必须重写Brew方法')
}

Beverage.prototype.pourInCup = function () {
    throw new Error('子类必须重写pourInCup方法')
}

Beverage.prototype.addCondiments = function () {
    throw new Error('子类必须重写addCondiments方法')
}

Beverage.prototype.customerWantsCondiments = function () {
    return true
}

/**
 * 模板方法
 * 方法中封装了子类算法框架，它作为一个算法的模板，指导子类以何种顺序去执行哪些方法
 */
Beverage.prototype.init = function () {
    this.boilWater()
    this.brew()
    this.pourInCup()
    if(this.customerWantsCondiments){
        this.addCondiments()
    }  
} 

/**
 * 子类咖啡
 */
var Coffee = function () {}

Coffee.prototype = new Beverage()

Coffee.prototype.brew = function () {
    console.log('用沸水冲泡咖啡')
}

Coffee.prototype.pourInCup = function () {
    console.log('把咖啡倒进杯子')
}

Coffee.prototype.addCondiments = function () {
    console.log('加糖和牛奶')
}

var Coffee = new Coffee()
Coffee.init()

/**
 * 子类茶
 */
var Tea = function () {}

Tea.prototype = new Beverage()

Tea.prototype.brew = function () {
    console.log('用沸水浸泡茶叶')
}

Tea.prototype.pourInCup = function () {
    console.log('把茶倒进杯子')
}

Tea.prototype.addCondiments = function () {
    console.log("加柠檬")
}


var tea = new Tea()
tea.init()

/**
 * 询问是否需要添加剂子类
 */
var CoffeeWithHook = function () {}

CoffeeWithHook.prototype = new Beverage()

CoffeeWithHook.prototype.brew = function () {
    console.log('用沸水浸泡茶叶')
}

CoffeeWithHook.prototype.pourInCup = function () {
    console.log('把茶倒进杯子')
}

CoffeeWithHook.prototype.addCondiments = function () {
    console.log("加柠檬")
}

CoffeeWithHook.prototype.customerWantsCondiments = function () {
    return window.confirm('请问需要调料么')
}


var coffeeWithHook = new CoffeeWithHook()
coffeeWithHook.init()
