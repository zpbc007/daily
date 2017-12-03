/**
 * 50男模特50女模特
 * 创建了100个对象
 */
var Model = function (sex, underwear){
    this.sex = sex
    this.underwear = underwear
}

Model.prototype.takePhoto  = function () {
    console.log(`sex=${this.sex},underwear=${this.underwear}`)
}

for(var i = 1; i <= 50; i++ ) {
    var maleModel = new Model('male', 'underwear' + i)
    maleModel.takePhoto()
}


for(var i = 1; i <= 50; i++ ) {
    var femaleModel = new Model('female', 'underwear' + i)
    femaleModel.takePhoto()
}

/**
 * 男女模特各一个
 * 创建了2个对象
 */
var Model = function (sex) {
    this.sex = sex
}

Model.prototype.takePhoto  = function () {
    console.log(`sex=${this.sex},underwear=${this.underwear}`)
}

var maleModel = new Model('male'),
    femaleModel = new Model('female')

for (var i =1; i <= 50; i++ ) {
    maleModel.underwear = `underwear${i}`
    maleModel.takePhoto()
}

for (var i =1; i <= 50; i++ ) {
    femaleModel.underwear = `underwear${i}`
    femaleModel.takePhoto()
}
