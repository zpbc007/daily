function Dictionary () {
    let items = {}

    this.set = function (key, value) {
        items[key] = value
    }

    this.has = function (value) {
        return value in items
    }

    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key]
            return true
        }
        return false
    }

    this.get = function (key) {
        return this.has(key) ? items[key] : undefined
    }

    this.values = function () {
        let values = []
        for (let k in items) {
            if (this.has(k)) {
                values.push(items[k])
            }
        }
        return values
    }
    
    this.getItems = function () {
        return items
    }

    this.size = function () {
        return Object.keys(items).length
    }

    this.clear = function () {
        items = {}
    }

}

export default Dictionary