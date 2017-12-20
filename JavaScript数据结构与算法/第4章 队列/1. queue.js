// 普通队列
let Queue = function () {
    let items = []

    this.enqueue = function (elements) {
        return items.push(elements)
    }

    this.dequeue = function () {
        return items.shift()
    }

    this.front = function () {
        return items[0]
    }

    this.isEmpty = function () {
        return items.length === 0
    }
    
    this.size = function () {
        return items.length
    }

    this.print = function () {
        console.log(items.toString())
    }
}

// 优先队列
let PriorityQueue = function () {
    let items = []

    function QueueElement (element, priority) {
        this.element = element
        this.priority = priority
    }

    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority)

        if (this.isEmpty()) {
            items.push(queueElement)
        } else {
            let added = false
            for (let i = 0; i < items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement)
                    added = true
                    break
                }
            }
            if (!added) {
                items.push(queueElement)
            }
        }
    } 

    this.dequeue = function () {
        return items.shift()
    }

    this.front = function () {
        return items[0]
    }

    this.isEmpty = function () {
        return items.length === 0
    }
    
    this.size = function () {
        return items.length
    }

    this.print = function () {
        let elementString = []
        for (let item of items) {
            elementString.push(item.element)
        }
        console.log(elementString.toString())
    }
}

// 循环队列
function hotPotato (nameList, num) {
    var queue = new Queue()

    for (let name of nameList) {
        queue.enqueue(name)
    }

    var eliminated = ''
    while(queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue()
        console.log(`${eliminated},被淘汰`)
    }

    return queue.dequeue()
}


export {Queue, PriorityQueue, hotPotato}