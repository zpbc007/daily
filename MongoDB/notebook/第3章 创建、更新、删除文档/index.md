## 插入文档

```
db.foo.insert({"bar": "baz"})
```

### 批量插入

```
db.foo.batchInsert([{"bar": "1"},{"bar": 2}])
```

**不能在单次请求中将多个文档批量插入到多个集合中**

## 删除文档

```
db.foo.remove()
```

### 删除整个集合

```
db.foo.drop()
```

## 更新文档

### 修改器 

只修改一部分属性

#### $set 

指定一个字段的值。不存在则创建

```
db.blog.update({id: '12312'}, {"$set": {"newKey": "new val"}})
```

#### $unset 

删除键

```
db.blog.update({id: '12312', {"$unset": {"newKey": 1}}})
```

#### $inc

增加键对应的值，如果键不存在则创建

```
db.blog.update({id: '123'}, {"$inc": {score: 50}})
```

#### $push

添加元素，如果数组不存在就创建一个

#### $each

向数组中添加数组中的每个元素

#### $sort

排序
1：正序
-1： 倒序

####  $slice 

指定数组长度
0: 用空数组更新
正数: 保留数组的前几位
负数: 保留数组的后几位

```
db.blog.update(
    {name: 'job'},
    {$push: {
        keyName: {
            $each: [90, 92, 85],
            $slice: -10,
            $sort: -1
        }
    }}
)
```

#### $ne

key值不等于对应值的文档
name不等于zp的集合更新

```
db.blog.update(
    {
        name: {
            $ne: 'zp'
        }
    },
    {
        $push: {
            "keyName": "keyValue"
        }
    }
)
```

#### $addToSet

避免向数组中插入重复数据

```
db.blog.update(
    {id: '123'},
    {$addToSet: {
        emails: 'job@hotmail.com'
    }}
)

db.blog.update(
    {id: '123'},
    {$addToSet: {
        emails: {
            $each: ['123@qq.com', '123@qq.com' ,'123@qq.com']
        }
    }}
)
```

#### $pop

1: 从末尾删除
-1： 从头部删除

#### $pull

删除数组中匹配的文档

```
db.blog.update(
    {}, 
    {$pull: {todo: 'laundry'}},
    {multi: true}
)
```

#### $

定位操作符

```
db.blog.update(
    {"comments.author": 'john'},
    {$set: {comments.$.author: 'jim'}}    
)
```

#### upsert

有匹配的更新没有则插入

```
db.blog.update(
    {url: '/blog'},
    {$inc: {pageviews: 1}},
    {upsert: true})
```

#### $setOnInsert

只会在文档插入时设置字段的值

```
db.blog.update(
    {},
    {$setOnInsert: {createdAt: new Date()}},
    {upsert: true}
)
```

#### save

shell 帮助函数 保存文档

```
> var x = db.blog.findOne()
> x.num = 42
> db.blog.save(x)
```

#### findAndModify

在一个操作中返回匹配结果并且进行更新。

```
db.blog.findAndModify({
    query: {status: 'READY'},
    sort: {priority: -1},
    update: {$set: {status: "RUNNING"}}
})
```