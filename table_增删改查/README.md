1.获取数据

【获取全部数据】
- 路径 /getItem
- GET
```
{
    "code":200,
    "data":[
        {
            "id":"2",
            "name":"大拇指",
            "sexy":"男",
            "tel":"qw2",
            "address":"25"
        },{
            "id":"3",
            "name":"大拇指",
            "sexy":"男",
            "tel":"qw2",
            "address":"25"
        }
    ]
}
```

【获取单个数据】

- 路径 /getItem
- 传值 id
- GET
- 返回 code:200成功
```
{
    "code":200,
    "data":[
        {
            "id":"2",
            "name":"大拇指",
            "sexy":"男",
            "tel":"qw2",
            "address":"25"
        }
    ]
}
```

2.添加数据
- 路径 /addItem
- POST
- 传值 添加数据
```
{
    code: 200,
    message: '添加成功'
}
```

3.删除数据

- 路径 /delectItem
- GET
- 传值 id
```
{
    code: 200,
    message: '删除成功'
}
```

4.修改数据
- 路径 /changeItem
- POST
- 传值 要修改的某个的全部数据
```
{
    code: 200,
    message: '修改成功'
}
```