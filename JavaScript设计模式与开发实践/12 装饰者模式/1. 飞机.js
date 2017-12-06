var Plane = function () {}

Plane.prototype.fire = function () {
    console.log('普通')
}

var MissileDecorator = function (plane) {
    this.plane = plane
}
MissileDecorator.prototype.fire = function () {
    this.plane.fire()
    console.log('导弹')
}

var AtomDecorator = function(plane) {
    this.plane = plane
}

AtomDecorator.prototype.fire = function () {
    this.plane.fire()
    console.log('原子弹')
}

// test
var plane = new Plane()
plane = new MissileDecorator(plane)
plane = new AtomDecorator(plane)
plane.fire()