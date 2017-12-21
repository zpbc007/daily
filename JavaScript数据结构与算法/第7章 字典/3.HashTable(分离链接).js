import LinkedeList from '../第5章 链表/1. linkedList'

function HashTable () {
    let table = []

    let ValuePair = function (key, value) {
        this.key = key
        this.value = value

        this.toString = function () {
            return `[${this.key}-${this.value}]`
        }
    }

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
        
        if (table[postion] == undefined) {
            table[postion] = new LinkedeList()
        }
        table[position].append(new ValuePair(key, value))
    }

    this.get = function (key) {
        let position = loseloseHashCode(key)

        if (table[position] !== undefined) {
            // 遍历链表
            let current = table[position].getHead()

            while(current.next) {
                if (current.element.key === key) {
                    return current.element.value
                }
                current = current.next
            }

            // 头结点或尾节点
            if (current.element.key === key) {
                return current.element.key
            }
        }
        return undefined
    }

    this.remove = function (key) {
        let position = loseloseHashCode(key)

        if (table[postion] !== undefined) {
            let current = table[position].getHead()
            while(current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element)
                    if (table[position].isEmpty()) {
                        table[position] = undefined
                    }
                    return true
                }
                current = current.next
            }
            
            if (current.element.key === key) {
                table[position].remove(current.element)
                if (table[position].isEmpty()) {
                    table[position] = undefined
                }
                return true
            }
        }

        return false
    }
}

export default HashTable