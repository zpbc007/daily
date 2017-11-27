/**
 * 计算奖金
 * 缺点：if else 太多 包含了所有的分支
 *      增加绩效等级 或者更改某个绩效的算法都需要更改函数
 *      复用性差     
 * @param {*} level 绩效等级 
 * @param {*} salary 工资
 */
let calculateBonus = function (level, salary) {
    if ( level === 's') {
        return salary * 4
    }
    if ( level === 'a') {
        return salary * 3
    }
    if ( level === 'b') {
        return salary * 2
    }
}