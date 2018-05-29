const http = require('http');
const fs = require('fs');
const url = require('url');

// 读取热门图书的数据
function read(cb) {
    fs
        .readFile('./book.json', 'utf8', function (err, data) {
            if (err || data.length == 0) {
                cb([]); //如果有错误或者文件没内容的话,就是空数组
            } else {
                cb(JSON.parse(data)); //将读出来的内容转换成对象
            }
        });
}

// 写入图书信息数据
function write(data, cb) {
    fs.writeFile('./book.json', JSON.stringify(data), cb);
}

// 获取轮播图 /sliders
let sliders = require('./sliders.js');

// 定义每页的个数
let pageSize = 5;

http.createServer((req, res) => {
    // 解决跨域问题的
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS")
        return res.end();

    let { pathname, query } = url.parse(req.url, true); //true把query转换成对象


    // 分页接口
    if (pathname === '/api/page') {
        // 取出offset
        let offset = parseInt(query.offset) || 0;//拿到当前前端传递的值
        read(function (books) {
            // 每次偏移量 -> 在偏移的基础上增加5条
            let result = books.reverse().slice(offset, offset + pageSize);//数据倒叙
            // 定义变量hasMore表示是否还有更多数据,有(true),无(false)
            let hasMore = true;//默认有更多
            // 看一下有没有了
            if (books.length <= offset + pageSize) {//已经显示的数目>总条数
                hasMore = false;
            }
            res.setHeader('Content-type', 'application/json;charset=utf8');
            res.end(JSON.stringify({ hasMore, books: result }));
        });
        return;
    }

    // 轮播图接口
    if (pathname === '/api/sliders') {
        res.setHeader('Content-type', 'application/json;charset=utf8');
        res.end(JSON.stringify(sliders));
    }
    // 热门图书接口
    if (pathname === '/api/hot') {
        read(function (books) { //books代表所有图书
            // 获取最新的图书
            let hot = books
                .reverse()
                .slice(0, 6);
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            res.end(JSON.stringify(hot));
        });
        return;
    }
    // 图书增删改查接口
    if (pathname === '/api/book') { // 都是对书的增删改查 ?id
        let id = parseInt(query.id);
        switch (req.method) {
            case 'GET':
                if (id >= 0) { //查询一个
                    read(function (books) {
                        // 使用find方法,用来查找目标元素，找到就返回该元素，找不到返回undefined
                        let book = books.find(item => item.id === id);
                        // 如果book是空,返回undefined,就置成空对象
                        if (!book)
                            book = {};
                        res.setHeader('Content-Type', 'application/json;charset=utf8');
                        res.end(JSON.stringify(book));
                    });
                } else { //获取所有的图书
                    read(function (books) {
                        res.setHeader('Content-Type', 'application/json;charset=utf8');
                        res.end(JSON.stringify(books.reverse()));
                    });
                }
                break;
            case 'POST':
                let str = '';
                req.on('data', chunk => {
                    str += chunk
                });
                req.on('end', () => {
                    let book = JSON.parse(str);
                    read(function (books) { // 添加id
                        book.id = books.length
                            ? books[books.length - 1].id + 1
                            : 1;
                        books.push(book); //将数据放到books中 ，books在内存中
                        write(books, function () {
                            res.end(JSON.stringify(book));
                        });
                    });
                });
                break;
            case 'PUT':
                if (id) { //获取了当前要修改的id,判断有没有
                    // 获取请求体
                    let str = '';
                    req.on('data', chunk => {
                        str += chunk;
                    });
                    req.on('end', () => {
                        // 把字符串转换成对象
                        let book = JSON.parse(str); //book要改成什么样子
                        read(function (books) {
                            books = books.map(item => {
                                // 返回什么替换成什么
                                if (item.id === id) { //找到id相同的那一本
                                    return book;
                                }
                                return item; //其他的返回即可
                            });
                            write(books, function () { //将数据写会json中
                                res.end(JSON.stringify(book));
                            });
                        });
                    });
                }
                break;
            case 'DELETE':
                if (id) {
                    read(function (books) {
                        books = books.filter(item => item.id !== id);
                        write(books, function () {
                            res.end(JSON.stringify({})); //删除返回空对象
                        });
                    });
                }
                break;
            default:
                break;
        }
        return;
    }

    // 读取路局
    // fs.stat('.'+pathname,function(err,stats){
    //     if(err){
    //         // res.statusCode=404;
    //         // res.end('NOT FOUND');
    //         fs.createReadStream('index.html').pipe(res);//总能找到,出现错误跳转到index.html
    //     }else{//如果是目录会报错
    //         if(stats.isDirectory()){
    //             let p = require('path').join('.'+pathname,'./index.html');
    //             fs.createReadStream(p).pipe(res);
    //         }else{
    //             fs.createReadStream('.'+pathname).pipe(res);
    //         }  
    //     }
    // })
}).listen(3000);