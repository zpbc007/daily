var each = function (arr, callback) {
    for (var i = 0, l = arr.length; i < l; i++) {
        callback.call(arr[i], i, arr[i])
    }
}

each([1,2,3], (index, item) => {
    console.log(`index:${index}, item:${item}`)
})

/**
 * 判断两个数组是否完全相等
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
var compare = function (arr1, arr2) {
    if (arr1.length != arr2.length) {
        throw new Error('不相等')
    }
    each(arr1, (index, item) => {
        if (item !== arr2[index]) {
            throw new Error('不相等')
        }
    })
    console.log('相等')
}

compare([1, 2, 3], [1, 2, 3])
compare([1, 2, 3], [1, 2, 4])