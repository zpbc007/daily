var Bervage = function (param) {
    var boilWater = function () {
        console.log('把水煮沸')
    }

    var brew = param.brew || function () {
        throw new Error('必须传递brew方法')
    }

    var pourInCup = param.pourInCup || function () {
        throw new Error('必须传递pourInCup方法')
    }

    var addCondiments = param.addCondiments || function () {
        throw new Error('必须传递addCondiments方法')
    }

    var F = function (){}

    F.prototype.init = function (){
        boilWater()
        brew()
        pourInCup()
        addCondiments()
    }
    return F
}

