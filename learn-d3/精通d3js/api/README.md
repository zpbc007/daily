## 选择元素
- selection.select 选择一个后代元素
- selection.selectAll 选择每一个后代元素
- selection.filter 基于数据过滤元素
    ```
    selection.filter(d => {
        if (d > 20 ) {
            return true
        } else {v
            return false
        }
    })
    ```

## 查找
- d3.ascending 升序排序
- d3.descending 降序排序

## 统计
- d3.min 最小值
- d3.max 最大值
- d3.extend 返回数组最小和最大值
- d3.sum 返回数组总和
- d3.mean 返回数组平均值
- d3.median 返回数组中位数
- d3.quantile 计算数字数组排序后的分位数
- d3.variance 方差
- d3.deviation 标准差

## 查找
- d3.bisect 二分查找数组项右边的位置(数组递增排序)
- d3.bisectRight 二分查找数组项右边的位置(数组递增排序)
- d3.bisectLeft 二分查找数组项左边的位置(数组递增排序)
    ```
    var numbers = [10, 13, 16, 19, 22, 25]
        iLeft = d3.bisectLeft(number.sort(d3.asceding), 16)
    
    // 插入77
    numbers.splice(iLeft, 0, 77)
    ```

## 转换
- d3.shuffle 数组随机排序
- d3.merge 将多个数组合并成一个
- d3.pairs 数组邻接对
    ```
    var colors = ['red', 'blue', 'green']
    var pairs = d3.pairs(colors)
    console.log(pairs)  // [['red', blue], ['blue', 'green']]
    ```
- d3.range 返回等差数列
    ```
    var a = d3.range(2, 10, 2)
    console.log(a)  // [2, 4, 6, 8]
    ```
- d3.permute 根据指定的索引号数组返回排列后的数组
    ```
    var animals = ['cat', 'dog', 'bird']
    var newAnimals = d3.permute(animals, [2, 1, 0])
    console.log(newAnimals) // ['bird', 'dog', 'cat']
    ```
- d3.zip 转置多个数组(求向量的内积)
    ```
    var zip = d3.zip([1000, 1001, 1002], ['zhangsan', 'lisi', 'wangwu'], [true, false, true])
    console.log(zip)    // [[1000, 'zhangsan', true], [1001, 'lisi', false], [1002, 'wangwu', true]]    
    ```
    ```
    // 求内积
    var a = [10, 20 ,5]
    var b = [-5, 10, 3]
    var ab = d3.sum(d3.zip(a, b), d => d[0] * d[1])
    ```
- d3.transpose(matrix) 求转置矩阵
    ```
    var a = [[1, 2, 3], [4, 5, 6]]
    var t = d3.transpose(a)
    console.log(t)  // [[1, 4], [2, 5], [3, 6]] 
    ```

## 映射
- d3.map([object], key) 构造映射
- map.has(key) 指定的key是否存在
- map.get(key) 获取值
- map.set(key) 设置值
- map.remove(key) key存在，移除返回true不存在返回 false
- map.clear 移除所有值
- map.keys 获取键数组
- map.values 获取值数组
- map.entries 获取键值对数组
- map.each 为每一项调用指定方法 传入key, value
- ~~map.forEach 同上~~
- map.empty 空返回true,否则返回false
- map.size()返回映射大小
    ```
    var dataset = [
        {id: 1000, color: 'red'},
        {id: 1001, color: 'green'},
        {id: 1002, color: 'blue'}
    ]
    var map = d3.map(dataset, d => d.id)

    map.has(1101) // true
    map.has(1103) // false
    ```

## 集合
- d3.set([array]) 构造集合，如果数组有重复项，只添加其中一项
- set.has 是否有指定元素
- set.add 添加指定元素，如果集合中存在则不添加
- set.remove 有指定元素删除返回true，否则返回false
- set.values 以数组形式返回所有元素
- ~~set.forEach 集合中每个元素调用函数~~
- set.each 同上
- set.empty 集合为空返回true,否则返回false
- set.size 返回集中元素数量

## 嵌套
- d3.nest 创建一个嵌套生成器
- nest.key 在嵌套层级中加一级
- nest.entries 指定数组，用于构建嵌套结构
    ```
    var persons = [
        {id: 10, name: 'zhang san', year: '1992', hometown: 'beijing'},
        {id: 11, name: 'lisi', year: '1993', hometown: 'nanjing'},
        {id: 12, name: 'wangwu', year: '1994', hometown: 'benxi'},
        {id: 13, name: 'zhaoliu', year: '1995', hometown: 'dalian'}
    ]

    var nest = d3.nest()
        // id作为第一个键
        .key( d => d.id)
        // year 作为第二个键
        .key( d => d.year)
        // 指定数组persons
        .entries(persons)
    ```
- nest.sortKeys 当前层级按键值排序
- nest.sortValues 叶子曾经按值排序
- nest.rollup 为每组叶子节点调用指定函数(汇总)
    ```
    var persons = [
        {id: 10, name: 'zhang san', year: '1992', hometown: 'beijing'},
        {id: 11, name: 'lisi', year: '1992', hometown: 'nanjing'},
        {id: 12, name: 'wangwu', year: '1994', hometown: 'benxi'},
        {id: 13, name: 'zhaoliu', year: '1995', hometown: 'dalian'}
    ]

    var nest = d3.nest()
        // 以年龄分组
        .key( d => d.year)
        // 每组的长度
        .rollup( value => value.lenght)
        .entries(persons)
    ```
- next.map 以map的形式输出array
    ```
    var persons = [
        {id: 10, name: 'zhang san', year: '1992', hometown: 'beijing'},
        {id: 11, name: 'lisi', year: '1992', hometown: 'nanjing'},
        {id: 12, name: 'wangwu', year: '1994', hometown: 'benxi'},
        {id: 13, name: 'zhaoliu', year: '1995', hometown: 'dalian'}
    ]

    var nest = d3.nest()
        // 以年龄分组
        .key( d => d.year)
        // 每组的长度
        .map(persons, d3.map)
    ```
    

## 修改元素
- selection.attr 设置或获取属性
- selection.classed 获取、添加或移除css类
- selection.style 设置或获取属性
- selection.property 设置或获取行内属性（如input的value属性） 
- selection.text 设置或获取文本内容 
- selection.html 设置或获取innerHTML
- selection.append 创建、添加元素
- ~~selection.insert 选择集置顶元素之前插入一个元素~~
- selection.remove 删除选择集中的元素
- selection.sort 基于数据给文档中的元素排序
    ```
    selection.sort((a, b) => return b - a)
    ```

## 数据绑定
- selection.data 元素和数据绑定
- selection.datum 选择集中的每一个元素都绑定相同的数据

## 控制语句
- seleciton.each 为每一个元素调用一次指定的方法
    ```
    var persons = [
        {id: 1001, name: 'zhangsan'},
        {id: 1002, name: 'lisi'}
    ]

    var p = d3.select('body').selectAll('p')
    p.data(persons)
        .each(d => d.age = 20)
        .text(d => `${d.id} ${d.name} ${d.age}`)
    ```
- seleciton.call 选择器调用指定方法
    ```
    var myFun = function(){}
    d3.selectAll().call(myFun)
    ```
- selection.empty 返回选择集是否为空
- selection.nodes 返回所有选中元素的数组
- selection.node  返回第一个非空元素 如果选择集为空返回null
- selection.size  返回元素数量

## 连续型比例尺
- ~~d3.scale.linear()~~ 创建一个线性比例尺
- d3.scaleLinear 同上
- continuous.invert(y) 输入在值域内的值，返回定义域对应的值
- continuous.domain 设定或获取定义域
- continuous.range 设定或获取值域
- continuous.rangeRound 代替range使用，比例输出值会四舍五入
- continuous.clamp 默认为false，当比例尺接收一个超出定义域范围的值，依然能够计算得到一个值， 这个值可能是超出值域范围的。如果为true则任何超出值域范围的值，都会被收缩到值域范围内
- continuous.nice 优化定义域（取整？）
- continuous.ticks 设定或获取定义域内具有代表性的值的数目，默认为10
- continuous.tickFormat 设定刻度的表示形式，如果小时到小数点后两位，使用百分比的形式显示
- pow.exponent 指定幂指数
- log.base 指定底数

## 量化比例尺
- d3.scaleQuantize 创建一个均匀的量化的线性比例尺
- ~~d3.scale.quantize 同上~~
- d3.scaleQuantile 创建一个分位数的量化的线性比例尺
- ~~d3.scale.quantili 同上~~
- d3.scaleThreshold 阈值比例尺
    ```
    var threshold = d3.scale.threshold()
            .domain([10, 20, 30])
            .range(['red', 'green', 'blue', 'black'])
    
    console.log(threshold(5))   // red
    console.log(threshold(15))  // green
    console.log(threshold(25))  // blue
    console.log(threshold(35))  // black   
    ```

## 序数比例尺
- d3.scaleOrdinal 创建一个序数比例尺（定义域、值域都离散的）
- ~~d3.scale.ordinal 同上~~
- ordinal 输入定义域内的一个离散值，返回值域内的一个离散值
- ordinal.domain  设定或获取定义域
- ordinal.range 设定或获取值域 
- d3.scalePoint 
    ![参数含义](https://raw.githubusercontent.com/d3/d3-scale/master/img/point.png)
- d3.scaleBand
    ![参数含义](https://raw.githubusercontent.com/d3/d3-scale/master/img/band.png)
- ~~ordinal.rangePoints 代替range设定值域，接收一个连续的区间，然后根据定义域中离散值的数量将其分段，分段值即作为值域的离散值~~
- ~~ordinal.rangeBands 同上但分段方法不同~~
- d3.schemeCategory10 10种颜色
- d3.schemeCategory20 20种颜色
- d3.schemeCategory20b 20种颜色
- d3.schemeCategory20c 20种颜色
- ~~d3.scale.category10 10种颜色~~
- ~~d3.scale.category20 20种颜色~~
- ~~d3.scale.category20b 20种颜色~~
- ~~d3.scale.category20c 20种颜色~~

## 轴
- ~~d3.svg.axis()~~ 创建默认的新坐标轴
- axis 将坐标轴应用到指定的选择集上，该选择集需要包含<svg>或<g>
- axis.scale 设定或获取坐标轴的比例尺
- ~~axis.orient 设定或获取坐标轴的方向~~
- axis.ticks 设定或获取坐标轴的分割数默认为10
- axis.tickValues 设定或获取坐标轴的指定刻度
- axis.tickSize 设定坐标轴的内外刻度线的长度
- axis.tickSizeInner 设定内刻度的长度（不是两端的刻度）
- ~~axis.innerTickSize 同上~~
- axis.tickSizeOuter 设定外刻度的长度（两端的刻度）
- ~~axis.outerTickSize 同上~~
- axis.tickFormat 明确地指定刻度格式