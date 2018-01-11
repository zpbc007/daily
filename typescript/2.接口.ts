interface Config {
    label: string
    // 可选属性
    color?: string
    // 只读属性
    readonly x: number
}
// 额外的属性检查
interface SquareConfig {
    color?: string,
    width?: number
}

function createSquare (config: SquareConfig): {color: string, area: number} {
    return {color: config.color || '123', area: config.width || 0}
}
/**
 * 字面量对象会经过额外属性检查
 * 如果对象存在任何目标类型不存在的属性时会报错
 * 1. 使用类型断言绕开检查
 * 2. 添加字符串索引签名
 */
// let mySquare = createSquare({color1: 123, width: 100})
let mySquare2 = createSquare({color1: 123, width: 100} as SquareConfig)

interface SquareConfig2 {
    color?: string
    width?: number
    [propName: string]: any
}

// 函数类型
interface SearchFunc {
    (source: string, subString: string): boolean
}
let mySearch: SearchFunc = function (a: string, b: string): boolean {
    return false
}

// 可索引的类型
interface StringArray {
    [index: number]: string
}

let myArray: StringArray = ['bob', '123']

/**
 * 索引签名支持两种类型： 数字和字符串
 * 数字索引返回的值必须是字符串索引返回值类型的子类型
 */
class Animal {
    name: string
}

class Dog extends Animal {
    breed: string
}

interface Test {
    [x: number]: Dog
    [y: string]: Animal
}

interface Test2 {
    // [x: number]: Animal
    [y: string]: Dog
}
interface NumberDictionary {
    [index: string]: number
    length: number
    // string 类型的索引只能返回 number类型的值
    // name: string    
}

// 实现
interface ClockInterface {
    currentTime: Date
    setTime(d: Date): void
}

class Clock implements ClockInterface {
    currentTime: Date
    setTime (d: Date): void {
        this.currentTime = d
    }
    constructor(h: number, m: number) {
        this.currentTime = new Date()
    }
}

// 类静态部分与实例部分
interface ClockConstructor {
    new (hour: number, minute: number): any
}
// class Clock2 implements ClockConstructor {
//     currentTime: Date
//     constructor(h: number, minute: number) {
//         console.log(1)
//     }
// }

interface ClockInterface2 {
    tick(): void
}

interface ClockConstructor2 {
    new (hour: number, minute: number): ClockInterface2
}

function createClock (ctor: ClockConstructor2, hour: number, minute: number): ClockInterface2 {
    return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface2 {
    constructor (h: number, m: number) {
        console.log(1)
    }
    tick () {
        console.log('beep')
    }
}

// 混合类型
interface Counter {
    (start: number): string
    interval: number
    reset(): void
}

function getCounter(): Counter {
    let counter = <Counter> function (start: number) {
        console.log(1)
    }
    counter.interval = 123
    counter.reset = function () {
        console.log(2)
    }
    return counter
}

let a = {}
let b = {}

a === b