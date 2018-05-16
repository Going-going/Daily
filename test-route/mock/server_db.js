const http = require('http')
const url = require('url')
const fs = require('fs')
const mySql = require('mysql')
const port = 9000;

var db = mySql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'test1'
})

db.connect()

http.createServer((request, response) => { //输出文件为json格式
	response.setHeader('Content-Type', 'application/json;charset=utf8')
	response.setHeader('Access-Control-Allow-Origin','*')
	// url模块的两个参数 pathname为/后的内容  query ？ 后的参数
	let {pathname,query} = url.parse(request.url,true);//解构赋值
	console.log(pathname);
	if(pathname === '/slide'){
		
		db.query('select * from banner_table', function(err, data) {
			if(err) {
				console.log(err);
			}else{
				
				console.log(data);
				response.end(JSON.stringify(data))
			}
		})
	}else if(pathname === '/list'){

	}
	
}).listen(9000)

console.log('server is running in http://127.0.0.1:' + port);