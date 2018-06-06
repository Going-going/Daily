const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const data = require('./data.js')
const port = '9000'

function writeFile(data) {
    fs.writeFile('data.json', JSON.stringify(data), (err) => {
        console.log(err);
        console.log('文件写入完成')
    })
}


const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Cache-Control,Content-Type,Hash-Referer,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By", ' 3.2.1');
    res.setHeader('Content-type', 'application/json;charset=utf8');

    var { pathname, query } = url.parse(req.url, true);
    var file = fs.readFileSync('data.json');
    var obj = {};
    var data = JSON.parse(file);

    if (pathname == '/getItem') {
        if (query.id) {
            var item = data.filter((item, index) => {
                return item.id == query.id
            })
            obj.code = 200;
            obj.data = item;
        } else {
            obj.code = 200;
            obj.data = data;
        }
        res.end(JSON.stringify(obj))
    }

    if (pathname == '/addItem') {
        var body = '';
        req.on('data', (chunk) => {
            body += chunk;
        })
        req.on('end', () => {
            var item = querystring.parse(body);
            var id = data[data.length - 1].id + 1;
            item.id = id;
            data.push(item);
            writeFile(data);
        })
        obj.code = 200;
        obj.message = '添加成功';
        res.end(JSON.stringify(obj))
    }

    if (pathname == '/delectItem') {
        var id = query.id;
        console.log(id);
        data.forEach((item, key) => {
            if (item.id == id) {
                data.splice(key, 1);
            }
        });
        writeFile(data);
        obj.code = 200;
        obj.message = '删除成功';
        res.end(JSON.stringify(obj))
    }

    if (pathname == '/changeItem') {
        var body = '';
        req.on('data', (chunk) => {
            body += chunk;
        })
        req.on('end', () => {
            var item = querystring.parse(body);
            console.log(item);
            data.forEach((i, k) => {
                if (i.id == item.id) {
                    data.splice(k, 1, item);
                }
            })
            writeFile(data);
        })
        obj.code = 200;
        obj.message = '修改成功';
        res.end(JSON.stringify(obj))
    }


})

server.listen(port)

console.log('server is running at http://127.0.0.1:' + port)