/**
 * File: /Users/zhaopeng/Documents/code/daily/learn-algorithm/静态查找.js
 * Project: /Users/zhaopeng/Documents/code/daily/learn-algorithm
 * Created Date: 2017-11-16
 * Author: ZhaoPeng
 * -----
 * 上次修改时间: 2017-11-16
 * Modified By: ZhaoPeng
 * -----
 * 树与树的表示
 */
/**
 * 静态查找
 * 目标： 从给定数组和数，找出数在数组中的位置，存在返回位置，不存在返回0（从最后一位开始循环）
 * @param arr 给定的搜索数组(数组第一项不放)元素
 * @param aim 寻找的目标
 * @return index 目标在数组中的所在位置 不存在返回0
 */
function SequentialSearch (arr, aim) {
    let i
    for (i = arr.length; i > 0 && arr[i] != aim; i--){}
    return i
}
// 将数组第一项设为aim（哨兵）,退出循环要么找到了要么碰到了哨兵。
// 好处：每次少了一个i > 0的判断
function SequentialSearch2 (arr, aim) {
    let i
    arr[0] = k
    for (i = arr.length; arr[i] != aim; i--) {}
    return i
}

/**
 * 二分查找
 * 条件：n个数据满足有序并且在数组中
 * 目标：给定按顺序拍好的数组，查找目标所在位置
 * @param arr 给定的搜索数组
 * @param aim 寻找的目标
 * @return index 目标在数组中的所在位置 不存在返回-1
 */
function BinarySearch (arr, aim) {
    let left = 0, right = arr.length - 1, mid, NoFount = -1
    
    while(left <= right) {
        mid = Math.floor((left + right)/2)
        if (aim < arr[mid]) {
            right = mid - 1
        } else if (aim > arr[mid]) {
            left = mid + 1
        } else {
            return mid
        }
    }

    return NoFount
}
