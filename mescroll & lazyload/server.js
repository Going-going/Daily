const http = require('http')
const fs = require('fs')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
    let {pathname, query} = url.parse(req.url, true)
    // 静态文件处理
    let reg = /\.(HTML|CSS|JS|ICO)$/i;
    if(reg.test(pathname)){
        try {
            let con = fs.readFileSync('.' + pathname)
            res.end(con)
        }catch(e) {
            res.end('页面找不到啦')
        }
    }
    if(pathname == '/getList'){
        fs.readFile('./booklist.json', (err, data) => {
            if(err){
                console.log(err)
            }else{
                res.setHeader('Content-type', 'application/json;charset=utf8');
                console.log(query);
                let curpage = query.page || 1;
                let pagesize = query.pagesize || 10;
                let _d =JSON.parse(data.toString('utf8')) 
                _d = _d.splice((curpage - 1) * pagesize, pagesize);
                console.log(_d);
                res.end(JSON.stringify(_d))
            }
        })

    }
})

server.listen(9000)