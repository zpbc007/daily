class LinkList {
    constructor () {
        // 头结点
        this.head = new Node(null)
        this.length = 0
    }
    // 返回对应位置的节点
    getElement (index) {
        // 头结点的下一个节点为链表的真实的第一个节点
        let node = this.head.next
        let i = 0

        // 判断index输入正确性
        if (index < 0 || index >= this.length) {
            throw new Error(`节点查找位置${index}超出链表范围`)
        }

        // i未到达指定位置则继续向下查找
        while (i++ < index) {
            node = node.next
        }
        // node为空则没有找到对应节点
        if (!node) {
            return false
        }   
        return node
    }
    // 在index位置插入节点
    insert (index, newNode) {
        // 插入节点的前一个与后一个节点
        let preNode = null,
            nextNode = this.head.next,
            i = 0

        // 判断index输入正确性
        if (index < 0 || index > this.length) {
            throw new Error(`节点插入位置${index}超出链表范围`)
        }

        // 插入位置为第一个
        if (index === 0) {
            preNode = this.head
        } else {
            while (i++ < index) {
                preNode = nextNode
                nextNode = nextNode.next
            }
        }
        // 插入操作
        newNode.next = nextNode
        preNode.next = newNode
        this.length++
    }
    // 删除index位置的节点
    deleteNode (index) {
        let i = 0,
            preNode = this.head,
            currentNode = this.head.next

        // 判断index输入正确性
        if (index < 0 || index >= this.length) {
            throw new Error(`节点删除位置${index}超出链表范围`)
        }

        if (i++ < index) {
            preNode = currentNode
            currentNode = currentNode.next
        }

        preNode.next = currentNode.next
        this.length--
        return currentNode
    }
    // 头插法创建链表（随机填充数据）
    createListHead (num) {
        let data =null,
            tempNode = null

        for (let i = 0; i < num; i++) {
            data = Math.random() * 10
            tempNode = new Node(data)
            tempNode.next = this.head.next
            this.head.next = tempNode
        }
        this.length = num
        return this
    }
    // 尾插法创建链表
    createListTail (num) {
        let data = null,
            tempNode = null,
            tailNode = this.head
        
        for (let i = 0; i < num; i++) {
            data = Math.random() + 10
            tempNode = new Node(data)
            tailNode.next = tempNode
            tailNode = tempNode
        }
        this.length = num
        return this
    }
    // 整表删除
    deleteAll () {
        debugger
        let currentNode = this.head.next,
            nextNode = null

        while (currentNode) {
            nextNode = currentNode.next
            // 清空数据与引用
            currentNode.data = null
            currentNode.next = null
            currentNode = nextNode
        }
        this.head.next = null
        this.length = 0
    }
}

class Node {
    constructor (data) {
        this.data = data
        this.next = null
    }
}

export {LinkList, Node}
