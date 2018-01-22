## 指定需要返回的键

1: 返回
0: 不返回

```
db.blog.find(
    {},
    {username: 1},
    {email: 1},
    {work: 0}
)
```

## 查询条件

- $lt <
- $lte <=
- $gt >
- $gte >=
- $ne !=

```
db.blog.find(
    {
        age: {$gte: 18, $let: 30}
    }
)
```

### or查询

#### $in 

返回与数组中所有条件都匹配的文档

```
db.blog.find(
    {
        name: {$in: [12, 23, 34]}
    }
)
```

#### $nin

返回与数组中所有条件都不匹配的文档

#### $or

多个键条件查询

```
db.blog.find(
    {$or: [{key1: 123}, {key2: true}]}
)
```

可以包含其他条件

```
db.blog.find(
    {$or: [
        {ticket: {$in: [12, 13]},
        {winner: true}}
    ]}
)
```

#### $mod

取模。将查询的值除以第一个给定值，若余数等于第二个给定值，匹配成功。

```
db.blog.find(
    {id: {$mod: [5, 1]}}
)
```
查询返回id为1、6、11、16等的数据

#### $not

取反

```
db.blog.find(
    {id: {
        $not: {
            $mod: [5, 1]
        }
    }}
)
```
查询返回id不为1、6、11、16等的数据

#### $and

```
db.blog.find(
    {$and: [
        {x: {
            $lt: 1
        },
        {x: 4}}
    ]}
)
```

#### null

null能够匹配自身 而且还会匹配不包含这个键的文档

匹配y为null的文档以及不存在y的文档

```
db.blog.find(
    {y: null}
)
```

```
db.blog.find(
    {z: {
            $in: [null],
            $exists: true
        }
    }
)
```

#### $all

通多多个元素匹配数组

```
db.blog.find(
    {$all: ['apple', 'banana']}
)
```

#### $size

查找特定长度的数组

```
db.blog.find(
    {fruit: {$size: 3}}
)
```

#### $slice

返回数组元素的一个子集，返回文档中所有的键

- \>0 前几条数据
- \<0 后几条数据

返回24~33个元素

```
db.blog.findOne(criteria, {
    comments: {$slice: [23, 10]}
})
```

#### 返回一个匹配的数组元素

1. $elemMatch

同时使用查询条件中的两个语句与一个数组元素进行比较 但是不会匹配非数组元素

```
db.blog.find({
    x: {$elemMatch: {$gt: 10, $lt: 20}}
})
```

2. min max

如果当前查询字段上创建过索引，可以使用min(), max()将查询条件遍历的索引限制为$gt 和 $lt 的值

```
db.blog.find(
    {x: {$gt: 10, $lt: 20}}
)
.min({x: 10})
.max({x: 20})
```

## $where查询

```
db.blog.find(
    {$where: function () {
        for (var current in this) {
            for (var other in this) {
                if (current != other && this[current] == this[other]) {
                    return true
                }
            }
            return false
        }
    }}
)
```

## 游标

数据库使用游标返回find的执行结果。

#### cursor.hasNext()

查看游标中是否还有其他结果

#### cursor.next()

下一个结果

#### cursor.limit(num)
#### cursor.skip(num)
#### cursor.sort({key1: 1, key2: -1})
#### cursor.snapshot() 
 
快照 确保每个文档只被返回一次



