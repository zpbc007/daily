var plane = {
    fire: function () {
        console.log('普通')
    }
}

var missleDecorator = function () {
    console.log('导弹')
} 

var atomDecorator = function () {
    console.log('原子弹')
}

var fire1 = plane.fire
plane.fire = function () {
    fire1()
    missleDecorator()
}

var fire2 = plane.fire
plane.fire = function () {
    fire2()
    atomDecorator()
}

// testa
plane.fire()