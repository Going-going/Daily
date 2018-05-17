var http = require('http');
var url = require('url')
var querystring = require('querystring')
const port = 3000;

var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="pwd"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer(function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        // 解析参数
        body = querystring.parse(body);
        console.log(body);
      // 设置响应头部信息及编码
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
   
      if(body.name && body.pwd) { // 输出提交的数据
          res.write("网站名：" + body.name);
          res.write("<br>");
          res.write("网站 URL：" + body.pwd);
      } else {  // 输出表单
          res.write(postHTML);
      }
      res.end();
    });
  }).listen(port);
  console.log('server is running in http://127.0.0.1:' + port);