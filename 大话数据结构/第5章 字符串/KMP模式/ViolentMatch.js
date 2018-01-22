/**
 * 暴力匹配字符串搜索
 * @param {*} str1 被搜索的字符串 
 * @param {*} str2 要匹配的字符串
 */
function ViolentMatch (str1, str2) {
    const l1 = str1.length,
        l2 = str2.length
    let i = 0,
        j = 0
    
    while (i < l1 && j < l2) {
        if (str1[i] === str2[j]) {
            i++
            j++
        } else {
            i = i - j + 1
            j = 0
        }
    }

    if (j === l2) {
        return i - j
    } else {
        return -1
    }
    
}