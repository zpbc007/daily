## 结构

一个MongoDB实例有多个数据库，每个数据库有自己的集合，集合中存放文档

## 基础操作

启动shell

```bash
$ mongo
```

查看当前指向的数据库

```js
db
```

选择数据库

```js
use foobar
```

### 插入

db下的blog集合中插入post文档

```
db.blog.insert(post)
```

### 查找

db下的blog集合中的所有元素

```
db.blog.find()
```

db下的blog集合中的一个元素

```
db.blog.findOne()
```

### 更新

db下的blog集合中title为123的文档 更新为{}

```
db.blog.update({title: '123'}, {})
```

### 删除

删除title为123的文档，**如果没有任何参数则删除全部文档**

```
db.blog.remove({title: '123'})
```
