let Stack = function () {
    let items = []

    this.push = function (element) {
        return items.push(element)
    } 

    this.pop = function (element) {
        return items.pop(element)
    }

    this.peek = function () {
        return items[items.length - 1]
    }

    this.isEmpty = function () {
        return items.length === 0
    }

    this.size = function () {
        return items.length
    }

    this.clear = function () {
        items = []
        return this
    }

    this.print = function () {
        return console.log(items.toString())
    }
}

export default Stack