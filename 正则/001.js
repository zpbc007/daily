/**
 * @argument \b 单词的开头或结尾，单词的分界处，它只匹配一个位置
 */
let test1 = /\bhi\b/
// true
test1.test('hi 123')
// false
test1.test('hi123')

/**
 * @argument . 除了换行符以外的任意字符
 * @argument * 前面的内容可以连续重复任意次以使整个表达式得到匹配(包括0次)
 */
let test2 = /\bhi\b.*\bLucy\b/
// true
test2.test('hi asdfasdf Lucy')
// false
test2.test('hi \n asdfasdf Lucy')

/**
 * @argument \d 匹配一位数字
 * @argument {num} 之前的必须连续匹配num次
 */
let test3 = /0\d{2}-\d{8}/
// true
test3.test('024-31581277')
// false
test3.test('0123-132')

/**
 * @argument \s 匹配任意的空白符 包括 空格、制表符、换行符、中文全角空格
 * @argument \w 匹配字母或数字或下划线或汉字
 */
let test4 = /\ba\w*\b/
// true
test4.test('a哈哈123阿道夫——————')
// false
test4.test('1asfd')

/**
 * @argument + 重复1次或更多次
 * @argument ^ 匹配字符串的开始
 * @argument $ 匹配字符串的结束
 */
let test5 = /^\d{5,12}$/
// true
test5.test('12345')
// false
test5.test('12')

/**
 * @argument \ 转义 \* \. \^ \$ \\
 * @argument ? 匹配0次或1次
 * @argument {n, }重复n次或更多次
 * @argument [aeiou] 匹配其中的任何一个
 */
let test6 = /\(?0\d{2}[)-]?\d{8}/
// true
test6.test('(010)88886666')
// true
test6.test('022-22334455')
// true
test6.test('02912345678')

/**
 * @argument | 分支条件 
 */
let test7 = /0\d{2}-\d{8}|0\d{3}-\d{7}/
// true
test7.test('010-12345678')
// true
tets7.test('0376-2233445')

/**
 * @argument () 分组
 */
let test8 = /(\d{1,3}\.){3}\d{1,3}/
// true
test8.test('192.168.123.193')

/**
 * @argument \W 不是字母、数字、下划线、汉子的字符 
 * @argument \S 不是空白符的字符
 * @argument \D 非数字的字符
 * @argument \B 不是单词开头或结束的位置
 * @argument [^x] 除了x以外的任意字符
 * @argument [^aeiou] 除了这几个字母以外的任意字母
 */
let test9 = /<a[^>]+>/
// true
test9.test('<a12>')
// false
test9.test('<a>')

/**
 * 后向引用 每组()对应一个引用 从1开始 ，也可以自己命名
 */
let test10 = /\b(\w+)\b\s+\1\b/
// true
test10.test('go go')
// false
test10.test('12 23')

let test11 = /\b(?<word>\w+)\b\s+\k<word>\b/
// true
test11.test('go go')
// false
test11.test('12 23')

/**
 * 正向零宽断言 
 * @argument (?=exp) 正预测先行断言 此位置后面匹配表达式exp
 * @argument (?<=exp) 正预测后发断言 此位置前面能匹配表达式exp
 */
// 以ing结尾（匹配除了ing以外的部分）
let test12 = /\b\w+(?=ing\b)/
// true
test12.test('acting') 

// 以re开头（匹配除了re以外的部分）
let test13 = /(?<=\bre)\w+\b/
test13.test('re111')

let test14 = /((?<=\d)\d{3})+\b/
test14.test('1234567')

/**
 * 负向零宽断言
 * @argument (?!exp) 负预测先行断言 此位置的后面不能匹配表达式exp
 * @argument (?<!exp) 负预测后发断言 此位置前面不能匹配表达式exp
 */
// 单词中有q且q的后面不是u q在词尾有问题
let test15 = /\b\w*q[^u]\w*\b/
// true
test15.test('werqio')
// false
test15.test('ewewq')

let test16 = /\b\w*q(?!u)\w*\b/
// true
test16.test('werqio')
// true
test16.test('ewewq')

// 前面不是小写字母的7位数字
let test17 = /(?<![a-z])\d{7}/
// true
test17.test('Q1234567')
// false
test17.test('a1234567')

// 匹配不包含属性的标签里的内容
let test18 = /(?<=<(\w+)>).*(?=<\/\1>)/
test18.test('<html></html>')

/**
 * 注释 (?#comment)
 */

/**
 * 贪婪与懒惰
 * @argument *? 重复任意次 尽可能少重复
 * @argument +? 重复1次或更多 尽可能少重复
 * @argument ?? 重复0或1次 尽可能少重复
 * @argument {n,m}? 重复n到m此 尽可能少重复
 * @argument {n,}? 重复n次以上 尽可能少重复
 */
// 匹配最长的以a开始以b结束的字符串
let test19 = /a.*b/
let str19 = 'aabab'
// aabab
str19.match(test19)
