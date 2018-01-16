// 生成部分匹配表
function getNext (str) {
    let i = 1,
        j = 0,
        next = []
    
    next[1] = 0
    while (i < str.length) {
        if (j ===0 || str[i] === str[j]) {
            i++
            j++
            next[i] = j
        }
        else {
            j = next[j]
        }
    }
}