function BinarySearchTree () {
    let Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }

    let root = null

    this.insert = function (key) {
        let newNode = new Node(key) 

        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }

    let insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else{
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }


    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback)
    }
    // 中序遍历 从小到大 排序
    let inOrderTraverseNode = function (node, callback) {
        if (node != null) {
            inOrderTraverseNode(node.left, callback)
            callback(node.key) 
            inOrderTraverseNode(node.right, callback)
        }
    }

    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback)
    }

    // 先序遍历 打印结构化文档
    let preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key)
            preOrderTraverseNode(node.left, callback)
            preOrderTraverseNode(node.right, callback)
        }
    }

    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback)
    }

    // 后序遍历 计算一个目录和它的子目录中所有文件所占空间的大小
    let postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback)
            postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }

    this.min = function () {
        return minNode(root)
    }

    let minNode = function (node) {
        if (node) {
            while(node && node.left !== null) {
                node = node.left
            }

            return node.key
        }
        return null
    }

    let findMinNode = function (node) {
        if (node) {
            while(node && node.left !== null) {
                node = node.left
            }

            return node
        }
        return null
    }

    this.max = function () {
        return maxNode()
    }

    let maxNode = function (node) {
        if (node) {
            while(node && node.right !== null) {
                node = node.right
            }

            return node.key
        } else {
            return null
        }
    }

    this.search = function  (key) {
        return searchNode(root, key)
    }

    let searchNode = function (node, key) {
        if (node === null) {
            return false
        }
        if (key < node.key) {
            return searchNode(node.left, key)
        } else if (key > node.key) {
            return searchNode(node.right, key)
        } else {
            return true
        }
    }

    this.remove = function (key) {
        root = removeNode(root, key)
    }

    let removeNode = function (node, key) {
        if (node === null) {
            return null
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key)
            return node
        } else if (key > node.key) {
            node.right = removeNode(node.right, key)
            return node
        } else {
            // 叶子节点
            if (node.left === null && node.right === null) {
                node = null
                return node
            }

            // 有一个子节点
            if (node.left === null) {
                node = node.right
                return node 
            } else if (node.right === null) {
                node = node.left
                return node
            }

            // 有两个子节点
            // 1. 找出右侧子树中最小值
            let aux = findMinNode(node.right)
            // 用最小节点替换当前节点
            node.key = aux.key
            // 删除右侧树中的最小节点
            node.right = removeNode(node.right, aux.key)
            return node
        }
    }
}

export default BinarySearchTree