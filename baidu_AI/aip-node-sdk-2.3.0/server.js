var AipOcr = require('./src/index').ocr;
var fs = require('fs');
var http = require('http');
var url = require('url');
var querystring = require('querystring')

//设置APPID/AK/SK（前往百度云控制台创建应用后获取相关数据）
var APP_ID = "11366058";
var API_KEY = "5i2xiBDGGodRgfNGhNwlgaRE";
var SECRET_KEY = "wwYDhs14iZx47WBC5i3pBfZqAvx26SNF";

var client = new AipOcr(APP_ID, API_KEY, SECRET_KEY);
var app = http.createServer(function (req, res) {
    var {pathname, query} = url.parse(req.url, true)
    // 加载静态资源
    var reg = /\.(HTML|CSS|JS|ICO)$/i;
    // console.log(pathname)
    if(reg.test(pathname)){
        try{
            var page = fs.readFileSync('.' + pathname, 'utf8');
            res.end(page)
        }catch(e) {
            res.end('404 NOT FOUND')
        }
    }
    // 通用票据
    if(pathname == '/receipt'){
        var body = '';
        req.on('data', (chunk) => {
            body += chunk;
            console.log('s')
        })
        req.on('end', () => {
            console.log('ss')
            body = querystring.parse(body);
            var base64Img = body.img;
            client.receipt(base64Img).then(function (result) {
                res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
                res.end(JSON.stringify(result));
            });
        })
    }
    // 增值税
    if(pathname == '/vatInvoice'){
        var body = '';
        req.on('data', (chunk) => {
            body += chunk;
        })
        req.on('end', () => {
            body = querystring.parse(body);
            var base64Img = body.img;
            client.vatInvoice(base64Img).then(function (result) {
                res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
                res.end(JSON.stringify(result));
            });
        })
    }
});

app.listen(8000, function () {
    console.log('listening on http://localhost:8000/index.html');
});