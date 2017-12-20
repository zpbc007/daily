function HashTable () {
    let table = []

    // 生成hash值
    let loseloseHashCode = function (key) {
        let hash = 0
        for(let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        // 为了得到较小的hash值
        return hash % 37
    }

    this.put = function (key, value) {
        let postion = loseloseHashCode(key)
        console.log(`position-${key}`)
        table[position] = value
    }

    this.get = function (key) {
        return table[loseloseHashCode(key)]
    }

    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined
    }
}

export default HashTable