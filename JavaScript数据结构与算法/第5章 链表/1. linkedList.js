function LinkedList () {

    let Node = function (element) {
        this.element = element
        this.next = null
    }

    let length = 0
    let head = null
    
    this.append = function (element) {
        let node = new Node (element),
            current
        
        if (head === null) {
            head = node
        } else {
            current = head

            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        length++
    }

    this.removeAt = function (position) {
        if (position > -1 && postion < length) {
            let current = head,
                previous,
                index = 0
            
            if (position === 0) {
                head = current.next
            } else {
                while (index++ < position) { 
                    previous = current
                    current = current.next
                }
                previous.next =current.next 
            }
            length--
        }
    }  

    this.insert = function (position, element) {
        if (postion >= 0 && postion <= lenght) {
            let node = new Node(),
                current = head,
                pervious,
                index = 0
            
            if (position === 0) {
                element.next = current
                head = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next= current
            }
            length++
        } else {
            return false
        }
    }

    this.toString = function () {
        let current = head,
            string = ''
        
        while (current) {
            string += current.element
            current = current.next
        }

        return string
    }

    this.indexOf = function (element) {
        let current = head,
            index = -1
        
        while (current) {
            if (element === current.element) {
                return index
            }
            index++
            current = current.next
        }

        return -1
    }

    this.remove = function (element) {
        let index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.isEmpty = function () {
        return length === 0
    }

    this.getHead = function () {
        return head
    }
}

export default LinkedList