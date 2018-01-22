function GetInput () {
    let arr = ['a', 'b', 'd', 'h', null, 'k', null, 'e', 'c', 'f', 'i', null, 'g', null, 'j']
    let rootNode = new TreeNode()
    createTree(rootNode, arr)
    return rootNode
}

function createTree (node, dataArr) {
    if (dataArr.length === 0) {
        return 
    }
    let data = dataArr.splice(0, 1)[0]
    if (!data) {
        node = null
    } else {
        node.data = data
        node.setLeftNode(new TreeNode())
        node.setRightNode(new TreeNode())
        createTree(node.leftNode, dataArr)
        createTree(node.rightNode, dataArr)
    }
}

class TreeNode {
    constructor (data) {
        this.data = data
        this.leftNode = null
        this.rightNode = null
    }

    setLeftNode (node) {
        this.leftNode = node
    }

    setRightNode (node) {
        this.rightNode = node
    }
}