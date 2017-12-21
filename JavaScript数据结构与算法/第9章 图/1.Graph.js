import Dictionary from '../第7章 字典/1.Dictionary.js'
import {Queue} from '../第4章 队列/1. queue.js'

function Graph () {
    let vertices = []
    var adjList = new Dictionary()

    // 添加顶点
    this.addVertex = function (v) {
        vertices.push(v)
        adjList.set(v, [])
    }

    // 添加边
    this.addEdge = function (v, w) {
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }

    this.toString = function () {
        let s = ''
        for (let i = 0; i < vertices.length; i++) {
            s += `${vertices[i]}->`
            let neighbors = adjList.get(vertices[i])
            for (let j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' '
            }
            s += '\n'
        }
        return s
    }

    // 未被发现 白色  被发现但未探索 灰色 发现且探索过 黑色
    let initializeColor = function () {
        let color = {}
        for (let i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white'
        }
        return color
    }

    // 广度优先 遍历节点
    this.bfs = function (v, callback) {
        // 所有节点初始化为白色
        let color = initializeColor(),
            queue = new Queue()
        
        // 将图的节点放入队列中
        queue.enqueue(v)

        while(!queue.isEmpty()) {
            // 从队列中取出一个
            let u = queue.dequeue(),
            // 取出相邻节点
                neighbors = adjList.get(u)
            
            // 取出的节点为灰色 被发现
            color[u] = 'grey'
            // 遍历相邻节点
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i]
                // 相邻节点为白色 则置灰
                if (color[w] === 'white'){
                    color[w] = 'grey'
                    // 相邻节点放入队列中
                    queue.enqueue(w)
                } 
            }
            // 节点相邻节点遍历完后则置黑
            color[u] = 'black'
            if (callback) {
                callback(u)
            }
        }
    }

    // 广度优先 查找最短路径
    this.BFS = function (v) {
        let color = initializeColor(),
            queue = new Queue(),
            // 到各个节点长度的数组
            d = {},
            // 节点的前一个点
            pred = {}
        
        queue.enqueue(v)

        // 初始化
        for (let i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0
            pred[vertices[i]] = null
        }

        while (!queue.isEmpty()) {
            let u = queue.dequeue(),
                neighbors = adjList.get(u)
            
            color[u] = 'grey'
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i]
                if (color[w] === 'white'){
                    color[w] = 'grey'
                    d[w] = d[u] +1
                    pred[w] = u
                    queue.enqueue(w)
                }
            }
            color[u] = 'black'
        }

        return {
            distances: d,
            predecessors: pred
        }
    }

    let dfsVisit = function (u, color, callback) {
        color[u] = 'grey'
        if (callback) {
            callback(u)
        }
        let neighbors = adjList.get(u)
        for (let i = 0; i < neighbors.length; i++) {
            let w = neighbors[i]
            if (color[w] === 'white') {
                dfsVisit(w, color, callback)
            }
        }
        color[u] = 'black'
    }

    this.dfs = function (callback) {
        let color = initializeColor()

        for (let i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, callback)
            }
        }
    }

    let time = 0
    let DFSVisit = function (u, color, d, f, p) {
        console.log(`discovered ${u}`)
        color[u] = 'grey'
        d[u] = ++time
        let neighbors = adjList.get(u)
        for (let i = 0; i < neighbors.length; i++) {
            let w = neighbors[i]
            if (color[w] === 'white') {
                p[w] = u
                DFSVisit(w, color, d, f, p)
            }
        }
        color[u] = 'black'
        f[u] = ++time
        console.log(`explored ${u}`)
    }

    this.DFS = function () {
        let color = initializeColor(),
            // 发现时间
            d = {},
            // 完成探索时间
            f = {},
            // 前溯点
            p = {}
        
        time = 0

        for (let i = 0; i < vertices.length; i++) {
            f[vertices[i]] = 0
            d[vertices[i]] = 0
            p[vertices[i]] = null
        }

        for (let i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                DFSVisit(vertices[i], color, d, f, p)
            }
        }

        return {
            discovery: d,
            finished: f,
            predecessors: p
        }
    }
}

export default Graph