// 布尔
let isDone: boolean = false
// 数字
let num: number = 123
// 字符串
let name1: string = 'bob'
// 数组
let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]
// 元组
let x: [string, number] = ['123', 1]
// 枚举
enum Color {Red, Green, Blue}
let c: Color = Color.Red
enum Color2 {Red = 1, Green = 2, Blue = 3}
let c2: Color2 = Color2.Red
// 值为2的名称
let colorName = Color2[2]
// 任何值
let notSure: any[] = [1, 1, '123']
// void 没有返回值
// never 无法到达的终点
function error (message: string): never {
    throw new Error(message)
}
// 类型断言
let someValue: any = 'this is a string'
let strLength: number = (<string> someValue).length
let strLength2: number = (someValue as string).length
