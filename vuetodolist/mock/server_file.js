const http = require('http')
const url = require('url')
const fs = require('fs')
var querystring = require('querystring')
const port = 9000;
var i = 0;
var backUrl = '';
var backHtml = function(backUrl) {
	console.log(backUrl)
	return '<!DOCTYPE html><html lang="en">'+
	'<head><meta charset="UTF-8">'+
	'<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
	' <meta http-equiv="X-UA-Compatible" content="ie=edge">'+
	'<meta http-equiv="refresh" content="0;url='+backUrl+'">'+
		'<title>Document</title>'+
	'</head>'+
	'<body>正在提交，请稍后...</body>'+
	'</html>'
}

function read(filename, cb) {
	fs.readFile(filename, function (err, data) {
		if (err) {
			console.log(err)
		} else {
			i++;
			console.log(i)
			cb(JSON.parse(data))
		}
	})
}

http.createServer((request, response) => { //输出文件为json格式
	console.log(request.method);
	response.setHeader('Content-Type', 'application/json;charset=utf8')
	response.setHeader('Access-Control-Allow-Origin', '*')
	// url模块的两个参数 pathname为/后的内容  query ？ 后的参数
	let { pathname, query } = url.parse(request.url, true);//解构赋值\
	// switch(request.method) {
	// 	case 'GET':
	// 	case 'POST': 
	// }
	
	if (pathname === '/slide' || pathname === '/') {
		read('slide.json', (data) => {
			response.end(JSON.stringify(data))
		})
	}
	if (pathname === '/booklist') {
		read('book.json', (data) => {
			if(query.type === 'hot'){
				var arr = data.slice(-6).reverse();
				response.end(JSON.stringify(arr))
			}else{
				response.end(JSON.stringify(data))
			}
		})
	}
	//添加
	if(pathname === '/addbook'){
		var body = '';
		var oldData = [];
		read('book.json', function(data) {
			oldData = data;
			request.on('data', (chunk) => {
				// buffer 转换？
				body += chunk;
			})
	
			request.on('end', () => {
				body = querystring.parse(body);
				body.id = oldData.length + 1;
				oldData.push(body)
				fs.writeFile('book.json', JSON.stringify(oldData), function(err) {
					if (err) {
						return console.error(err);
					}
					console.log("数据写入成功！");
					response.writeHead(200,{'Content-Type':'text/html'});  
					backUrl = 'http://localhost:8080/#/add'
					response.end(backHtml(backUrl))
				})
			})
		})
	}
	// 删除
	if(pathname === 'book'){
		var oldData = [],
			body = '';
		read('book.json', function (data) { 
			oldData = data;
			switch(request.method) {
				case 'GET':
				case 'POST':
				case 'DELETE':
				case 'PUT':
				default: 
					break;
			}
		 })

	}
}).listen(port)

console.log('server is running in http://127.0.0.1:' + port);