const http = require('http')
const url = require('url')
const fs = require('fs')
const port = 9000;


http.createServer((request, response) => { //输出文件为json格式
	response.setHeader('Content-Type', 'application/json;charset=utf8')
	response.setHeader('Access-Control-Allow-Origin','*')
	// url模块的两个参数 pathname为/后的内容  query ？ 后的参数
	let {pathname,query} = url.parse(request.url,true);//解构赋值
	if(pathname === '/slide' || pathname === '/'){
		fs.readFile('slide.json', (err, data) => {
			if(err) return console.log(err)
			response.end(data.toString('utf8'))	
		})
	}
	if(pathname === '/booklist'){
		fs.readFile('book.json', (err, data) => {
			if(err) console.log(err)
			response.end(data.toString('utf-8'))
		})
	}	
}).listen(9000)

console.log('server is running in http://127.0.0.1:' + port);