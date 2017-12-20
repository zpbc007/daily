function DoublyLinkedList () {
    let Node = function (element) {
        this.element = element
        this.next = null
        this.prev = null
    }

    let length = 0,
        head = null,
        tail = null

    this.insert = function (position, element) {

        let node = new Node(element),
            current = head,
            previous,
            index = 0

        // 检查越界值
        if (position >= 0 && position <= length) {

            if (position === 0) {// 第一个位置
                if (!head) {
                    head = node
                } else {
                    node.next = current
                    current.prev = node
                    head = node
                }
            } else if (postion === length) {// 最后一个
                current = tail
                current.next = node
                node.prev = current
                tail = node
            } else {
                while (index++ < position ) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = current

                current.prev = node
                node.prev = previous
            }

            lenght++
            return true
        } else {
            return false
        }
    }

    this.removeAt = function (position) {
        // 检查越界值
        if (position > 0 && position < length) {
            let current = head,
                previous,
                index = 0
            
            if (position === 0) {
                head = current.next

                if (length === 1) {
                    tail = null
                } else {
                    head.prev = null
                }
            } else if (position === length - 1) {
                current = tail
                tail = current.prev
                tail.next = null
            } else {
                while (index++ <position ) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                current.next.prev = previous
            }

            length--

            return current.element
        } else {
            return null
        }
    }
}