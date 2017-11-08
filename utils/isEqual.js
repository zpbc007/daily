let nullType = ['[object Null]', '[object Undefined]']
let basicType = ['[object String]', '[object Number]', '[object Boolean]']
let objType = ['[object Object]', '[object Array]']
// 判断对象是否相等
export function objEqual (obj1, obj2) {
    let obj1Type = Object.prototype.toString.apply(obj1)
    let obj2Type = Object.prototype.toString.apply(obj2)
    // 先判断类型是否相同
    if (obj1Type === obj2Type) {
        if (nullType.includes(obj1Type)) {
            return true
        } else if (basicType.includes(obj1Type)) {// 基础类型直接比较
            return obj1 === obj2
        } else if (objType.includes(obj1Type)) {// 对象类型
            // 先比较key值
            let obj1Keys = Object.keys(obj1)
            let obj2Keys = Object.keys(obj2)
            if (obj1Keys.length !== obj2Keys.length) {
                return false                
            } else if (obj1Keys.length === 0) {
                return true
            } else {
                let temp = []
                for (let key of Object.keys(obj1)) {
                    temp.push(objEqual(obj1[key], obj2[key]))
                }
                return temp.includes(false) ? false : true
            }
        }
    } else {
        return false
    }
}