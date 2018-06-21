# Node
## V8引擎的优势
- 强大的编译和快速的执行效率 => 运用了很多算法和技巧
- 性能非常好,执行效率远超Python,ruby等脚本语言
- 历史包袱轻,没有同步I/O
- 强大的事件驱动机制

-----------------------------------------------

## 什么是NodeJs
- NodeJs就是一个让JavaScript运行在服务端的开发平台

-----------------------------------------------

## NodeJs和其它后端语言的区别
- 不是一种独立的语言(PHP,JSP既是语言,也是平台)
- NodeJs用JavaScript进行编程,运行平台是V8引擎
- 轻量级架构(NodeJs不需要架设在任何服务器之上,而Java,PHP需要架设在服务器上)
- 用最小的硬件成本,达到更高的并发,更优的处理性能

-----------------------------------------------

## NodeJs的特点
- 单线程
- 非阻塞I/O (NodeJs中所有的I/O都是异步的,都是回调函数套回调函数)
- 事件驱动
- 总结：善于I/O,不善于计算;天生异步(callback[回调函数],thunk[参数的求值策略],promise,async,generator[ES6中的生成器])

-----------------------------------------------

## NodeJs适用场景
- 网站开发(express/koa)
- IM即时聊天
- API(移动端,h5)
- HTTP Proxy
- 前端构建工具(webpack,gulp)
- 跨平台打包工具
- 操作系统(NODEOS)
- 命令行工具
- 反向代理

-----------------------------------------------

## NodeJs不适用的场景
- 银行,电信,证券等需要可靠性极高的业务

-----------------------------------------------

## 客户端与服务器
### 1.CS / BS 架构
- 是软件使用方式上的一种划分
- C/S -> Client/Server -> PC客户端/服务器架构
    - 特点：在服务器中最主要的是数据库,所有的业务逻辑和交互都交给客户端完成
    - 优点：较为安全,用户界面丰富,用户体验好
    - 缺点：每次升级都需要重新安装,针对不同的操作系统,可移植性差
- B/S -> Browser/Server -> 浏览器/服务器架构
    - 特点：基于浏览器访问的应用,把业务层交给服务器来完成,客户端仅仅做页面渲染和数据的交换
    - 优点：只开发服务端,可以跨平台,移植性强
    - 缺点：安全性低,用户体验差
### 2.Web资源
- 什么是web? => web网页,它用于表示网络主机上供外界访问的资源
- WEB资源分类
    - 静态 -> 供客户浏览的数据始终是不变的
    - 动态 -> 浏览的数据是由程序产生,是可变的
- WEB资源存放位置
    - 存放在web服务器指定的目录中,可以通过对应的端口在浏览器中访问到
- URL地址
    - 协议://主机地址:端口号/资源地址
### 3.资源的访问流程
- 客户端
    - 浏览器
    - Android
    - IOS
    - 微信小程序
- 服务器
    - PHP服务器
    - Tomcat服务器
    - Node服务器
- 打开网址就可看到一个页面,流程是怎样的
    - 一个网址对应的是一个IP地址(一个IP地址对应一台电脑,通过IP找到对应的电脑,电脑当中安装有web服务器,通过端口号找到对应的服务器)
    - 找到服务器,把对应的网页返回给你
    - 这样的一个过程就是http请求的过程
- 请求与响应
    - 请求 -> 把客户端请求发送给服务器
    - 响应 -> 服务器把想要的数据发送给客户端
    - 请求和响应都要一定的格式 -> 这个约定就是使用的http协议

----------------------------------------------------------

## HTTP协议
### 1.什么是协议
- 约束双方规范的一个准则
### 2.什么是HTTP协议
- 超文本传输协议,是互联网应用最广泛的一种网络协议
- 所有www文件都必须遵守这个标准
- 约束响应和请求的规则
### 3.HTTP的组成部分
- 请求
- 响应
- 两者是成对出现的
### 4.请求的发送方式
- 通过浏览器的地址栏
- 通过HTML中的form表单
- 通过a链接的href
- 通过src属性
### 5.http请求
- 请求行
    - 请求方式：GET,POST
    - 请求的资源
    - 协议版本 (目前基本都是基于HTTP1.1)
- 请求头
    - 是客户端发送给服务器端的一些信息
    - 使用键值对表示
    - 自动把客户端的信息发送给服务器
- 请求体
    - 当请求方式是POST的时候,请求体会有请求的参数
    - 若请求方式为GET,参数不会出现在请求体中,而是会拼接在url上
### 6.http响应
- 响应行
    - HTTP协议
    - 状态码
        - 200 请求成功
            - 201 已创建
            - 202 接收
            - 203 非认证信息
            - 204 无内容
            - 205 重置内容
            - 206 部分内容
        - 302 请求重定向
            - 300 多路选择
            - 301 永久转移
            - 302 暂时转移
            - 303 参见其它
        - 304 访问资源没有改变,访问本地缓存
            - 304 未修改
            - 305 使用代理
        - 404 请求资源不存在
            - 400 错误请求
            - 401 未认证
            - 402 需要付费
            - 403 禁止
            - 404 未找到
            - 405 方法不允许
            - 406 不接受
            - 407 需要代理认证
            - 408 请求超时
            - 409 冲突
            - 410 失败
            - 411 需要长度
            - 412 条件失败
            - 413 请求实体太大
            - 414 请求url太长
            - 415 不支持媒体类型
        - 500 服务器内部错误
            - 501 未实现
            - 502 网关失败
            - 503 服务不可用
            - 504 网关超时
- 响应头
- 响应体
    - 响应体是服务器回写给客户端的页面正文
    - 浏览器将正文加载到内容
    - 然后解析渲染显示页面内容
### 7.请求方式
- 8种请求类型
    - OPTIONS -> 返回服务器针对特定资源所支持的http请求方法
    - HEAD -> 请求指定的页面信息,并返回头部信息
    - GET -> 请求指定的页面信息,并返回实体
    - POST -> 向指定资源提交数据进行数据处理
    - PUT -> 向指定资源位置上传最新内容
    - DELETE -> 删除指定的资源
    - TRACE -> 回显服务器收到的请求,主要用于测试或诊断
    - CONNECT -> HTTP1.1协议中预留给能够将连接改为管道方式的代理服务器
- 常用的两种请求
    - GET
        - ?传参
        - 有大小限制,请求字符最多1024字符
        - 能够被缓存
        - 记录会保存在浏览器的记录里
        - 只允许ASCII字符类型,不支持二进制流
        - 点击刷新时不会有反应
        - 主要用于获取数据
    - POST
        - 传参在请求体中
        - 没有历史记录
        - 参数类型没有限制
        - 数据不会显示在地址栏中,也不会缓存和保存在浏览器记录里
        - 传输量大,2M
        - 主要用于发送数据

---------------------------------------------------------------

## 进程和线程
### 1.进程
- 系统进行资源分配和调度的基本单位,是操作系统结构的基础
- 我们写的程序和代码都是放在进程里面的,相当于工厂中的车间
- 进程为程序的运行提供了必备的环境
### 2.线程
- 计算机中最小的计算单位,负责执行进程中的程序,相当于车间中的操作工人
- js是单线程的,时间片分割
- Node服务器单线程的,但是相当健壮,后台拥有一个I/O进程池进行调度;分布式服务器部署

------------------------------------------------------------------------------

## 模块化
- 如果程序设计达到了一定的程度,则必须对其进行模块化(前台不大需要,但是服务器端没有模块化思想就玩不转了)
- 模块化可以是多种形式,但都提供了能够将代码分割为多个源文件的机制 -> CommonJs
- CommonJs的提出是为了弥补JavaScript没有模块化思想这方面的缺陷
- CommonJs(引用[require('xxx')],定义,标识)

-------------------------------------------------------------------------------

## 模块结构剖析
- 函数的5个参数
    - exports -> 该对象用来将函数内部的局部变量或局部函数暴露在外部
    - require -> 用来引入外部的模块
    - module -> 当前的模块
    - __filename -> 是文件的绝对路径
    - __dirname -> 是目录的绝对路径

-------------------------------------------------------------------------------

## exports和module.exports的区别
### 1.表象区分
- exports只能通过语法来像外暴露内部变量
- module.exports既能通过语法,也可以直接赋值一个对象
### 2.实质区分
- 值类型和引用类型

-------------------------------------------------------------------------------

## Node-Buffer - 缓冲区 
### 1.为什么要用buffer
- 在ES6出来之前,前端工程师对字符串和DOM进行简单的操作就可以满足需求,对二进制数据没有过多的接触
- 在node出现后,前端工程师的工作场景发生了变化,可以深入到网络传输,文件操作及图像处理,而这些都是与二进制数据有关
- node中的buffer是一个二进制数据容器,数据结构类似于Js中的数组,专门用于数据的存放
### 2.buffer的基本使用
#### 2.1 历史使用
- const buf = new Buffer(10);
- 这种形式存在安全隐患,分配到的内存可能还存储着旧数据,这样就存在安全隐患
#### 2.2 新使用方式
- Buffer.from(str); 将一个字符串转换为buffer
- Buffer.alloc(size); 创建一个指定大小的buffer
- Buffer.allocUnsafe(size); 创建一个指定大小的buffer,但是可能包含敏感数据
#### 2.3 注意点
- buffer的结构和数组很像,操作的方法也和数组类似
- buffer中是以二进制的方式来存储数据的
- buffer是node自带的,不需要引入,直接使用即可

http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_alloc_size_fill_encoding

-------------------------------------------------------------------------------

## Node-fs
### 1.基本概念
- 在Node中与文件系统的交互是非常重要的,服务器的本质就是把本地的文件发送给客户端
- Node通过fs模块来和文件系统进行交互,该模块提供了一些api来打开、读取、写入文件操作
### 2.使用特点
- fs模块中所有的操作都有两种模式,"同步"和"异步"
- 同步文件系统会阻塞执行,也就是说除非执行完毕,否则不会向下执行
- 异步文件系统不会阻塞执行,而是通过回调把结果进行返回
### 3.文件操作
- 打开文件
    - fs.open(path,flag)
    - fs.openSync(path,flag)
    - 常见的flag
        - r 读取文件,文件不存在出现异常
        - w 打开文件用于写操作
        - a 打开文件用于追加
- 关闭文件
- 写入文件操作
- 读取文件操作

http://nodejs.cn/api/fs.html

----------------------------------------------------------------------------

## 数据库
### 1.基本概念
- 数据库就是按照一定的额数据结构来组织、存储和管理数据的仓库
- 数据库是大批量数据持久化的普遍选择
- 为什么会普遍选择数据库来存储数据呢?
    - 数据库是有结构的,数据与数据之间可以建立各种关系
    - 数据库能够提供各种接口,让数据的处理变得简单
    - 给各种语言提供了完善的API
### 2.数据库分类
#### 2.1 关系型数据库
- MySql,SqlServer,Oracle... ,通过一张表来建立关联
- 基本上都使用SQL语言来管理数据库
#### 2.2 非关系型数据库
- NoSQL
- 没有行和列的概念,使用JSON来存储数据,集合就相当于表,文档就相当于行
- 特征
    - 通过键值对来存储数据库
    - 列存储数据库
    - 文档型数据库
    - 图形数据库
- MongoDB,HBase,Redis...
#### 2.3 区分
- 关系型数据库比较结构化,操作不是很灵活
- 非关系型数据库操作灵活,但是不适合大型数据存储,比较适合微架构
- 总的来说,两者是相互辅助的关系

### 3.MongoDB
#### 3.1 简介
- 是快速开发互联网web应用而设计的数据库系统
- 数据模型是面向文档的,类似于JSON的结构;数据库中存储的是各种各样的BJSON
#### 3.2 设计目标
- 极简、灵活,经常在web应用栈的业务层被运用
#### 3.3 安装&配置
- 下载MongoDB (https://www.mongodb.org/dl/win64/)
- 步骤
    - 安装MongoDB数据库服务器
    - 配置环境变量 (C:\Program Files\MongoDB\Server\3.4\bin)
    - 在c盘根目录创建一个data文件夹,在里面创建一个db文件夹
    - 打开命令行
        - 输入mongod,用来启动MongoDB服务器
    - 指定端口和路径
        - mongod --dbpath 路径 --port 端口号
    - 将MongoDB设置为系统服务
        - 可以在后台启动,不用每次都手动启动
        - 创建配置文件mongod.cfg,放到C:\Program Files\MongoDB\Server\3.4下
        - 执行sc.exe create MongoDB binPath= "\"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe\" --service --config=\"C:\Program Files\MongoDB\Server\3.4\mongod.cfg\"" DisplayName= "MongoDB" start= "auto"
    - 如果服务启动失败,则执行sc delete MongoDB 删除之前配置的服务,重新再来
#### 3.4 使用
##### 3.4.1 基本组成
- 数据库 -> 数据库是一个仓库,在仓库中可以存放集合
- 集合 -> 集合类似于数组,在集合中可以存放文档
- 文档 -> 文档数据库中的最小单位,我们存储和操作的内容都是文档
##### 3.4.2 基本指令
- show dbs -> 显示当前所有的数据库
- use 数据库名 -> 进入到指定的数据库中
- db -> 显示当前所在的数据库
- show collections -> 显示数据库中的所有集合
##### 3.4.3 CRUD操作
- 插入操作 例子：db.student.insert({id:"001",name:"TIM",age:18});
    - 插入多条 
        db.student.insert([
            {name:"a",age:10},
            {name:"b",age:12}
        ])
- 查询操作 例子：db.student.find({name:'Jerry'}); -> {}里是查询条件
- 更新操作 例子：db.student.update({name:'Jerry'},{$set:{age:20}});
    - $unset 删除字段
    - 修改多个 updateMany
- 删除操作 例子：db.student.remove({"age":12});
#### 3.5 安装可视化工具
- https://www.mongodbmanager.com/download
#### 3.6 排序和索引
##### 3.6.1 排序
- 查询文档时,默认是按照_id的值来进行升序排列的
- sort()可以用来指定文档的排序规则,sort内部需要传递一个对象来指定文档的排序规则,其中1表示升序,-1表示降序
- limit skip sort的顺序可以任意改变,运行时会自动调整
- db.student.find().sort({age:1})
##### 3.6.2 索引
- 在查询时,可以在第二个参数来设置查询的结果
- db.student.find({},{name:1,age:1,_id:0}); -> 1代表显示 0代表不显示

### 4.Mongoose
#### 4.1 需求分析
- 为什么要用?
    - 之前我们都是通过命令行或者shell来完成对数据库的操作,但是我们在开发过程中大部分是通过程序来完成对数据库的操作
    - 而Mongoose就是一个让我们可以通过Node来操作MongoDB的模块
#### 4.2 Mongoose是什么
-  官网 http://mongoosejs.com
- 是一个对象文档模型库,他对Node原生的MongoDB模块进行了进一步的优化封装,并提供了更多的功能
#### 4.3 Mongoose的优势
- 可以为文档创建一个模式结构
- 可以对模型中的对象/文档进行验证
- 数据可以通过类型转换转换为对象模型
- 可以使用中间件来应用业务逻辑挂钩
- 比Node原生的MongoDB驱动更加容易
#### 4.4 Mongoose的基本使用
##### 4.4.1 相关概念
- mongoose提供了几个新的对象
    - Schema(模式对象) -> 定义约束了数据库中的文档结构
    - Model -> Model对象作为集合中的所有文档的表示,相当于MongoDB数据库中的collection
    - Documnet -> 表示集合中的具体文档
##### 4.4.2 使用步骤
```javascript
    // 1.引入模块
    let mongoose = require('mongoose');
    // 2.连接数据库
    mongoose.connect('mongodb://localhost/m_data');
    // 3.监听状态
    let db = mongoose.connection;
    db.once('open', () => {
        console.log('SUCCESS');
    });
    // 4.创建Schema
    let Schema = mongoose.Schema;
    let personSchema = new Schema({
        name: String,
        age: Number,
        sex: {
            type: String,
            default: '男'
        },
        chat: String
    });

    // 5.创建model
    let personModel = mongoose.model('person', personSchema);

    // 6.document
    personModel.create({
        name: 'Jerry',
        age: 24,
        chat: '18854256256'
    }, (err) => {
        if (!err) {
            console.log('insert success');
        } else {
            throw Error;
        }
    });
```

#### 4.5 Mongoose增删改查
##### 4.5.1 增加
```javascript
    // 6.1 增加
    personModel.create([
        { name: 'Tom', age: 24, chat: 12345678 },
        { name: 'Duncan', age: 40, chat: 123 },
        { name: 'Admain', age: 32, chat: 678 },
        { name: 'Jordan', age: 54, chat: 3478 }
    ], (err) => {
        if (!err) {
            console.log('insert success');
        } else {
            throw Error;
        }
    });
```
##### 4.5.2 查询
```javascript
    // 6.2 查找
    personModel.find({}, (err, docs) => {
        if (!err) {
            console.log(docs);
        }
    });

    // -> 根据指定的查找
    // -> {name:1} -> 只显示name
    personModel.find({ name: 'Jerry' }, { name: 1, sex: 1 }, (err, docs) => {
        if (!err) {
            console.log(docs);
        } else {
            throw Error;
        }
    });

    // -> 如果{}不传,把后面的{}改为''也是可以的
    // -> 加-昊可以不显示_id
    personModel.find({}, "-_id name sex chat", (err, docs) => {
        if (!err) {
            console.log(docs);
        } else {
            throw Error;
        }
    });

    // -> {skip:2,limit:2} 限制条数
    personModel.find({}, "-_id name sex chat", { skip: 2, limit: 2 }, (err, docs) => {
        if (!err) {
            console.log(docs);
        } else {
            throw Error;
        }
    });
```
##### 4.5.3 修改
```javascript
    // 6.3 修改
    personModel.update({ name: 'Jerry' }, { $set: { age: 20 } }, (err) => {
        if (!err) {
            console.log('update Success');
        } else {
            throw Error;
        }
    });
```
##### 4.5.4 删除
```javascript
    // 6.4 删除
    personModel.remove({ name: 'Tom' }, (err) => {
        if (!err) {
            console.log('DELETE SUCCESS');
        } else {
            throw Error;
        }
    });
```

#### 4.6 Mongoose拓展
##### 4.6.1 统计文档个数
```javascript
    personModel.count({},(err,count)=>{
        if(!err){
            console.log(count);
        }
    });
```
##### 4.6.2 通过document的方法来插入数据
```javascript
    let person = new personModel({
        name:'ASS',
        age:20,
        chat:'123'
    });
    person.save((err,product)=>{
        if(!err){
            console.log(product);
        }
    });
```
------------------------------------------------------------

## Node-HTTP (省略)
### 1.介绍
- NodeJs没有web容器
    - 没有根目录,不能像PHP或者javaWeb通过切换目录结构来切换页面,所有的页面资源都是通过路径配置的
    - 在Node中通过fs模块读入文件,并手动配置路由
    - NodeJs擅长于顶层路由设计,url与物理文件并不是一一对应的
### 2.url模块
- url.parse()