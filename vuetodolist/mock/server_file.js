const http = require('http')
const url = require('url')
const fs = require('fs')
var querystring = require('querystring')
const port = 9000;
var i = 0;
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
	response.setHeader('Content-Type', 'application/json;charset=utf8')
	response.setHeader('Access-Control-Allow-Origin', '*')
	// url模块的两个参数 pathname为/后的内容  query ？ 后的参数
	let { pathname, query } = url.parse(request.url, true);//解构赋值\
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

	if(pathname === '/addbook'){
		// fs.writeFile('book.json', 'aaa', function(err) {
		// 	if (err) {
		// 		return console.error(err);
		// 	}
		// 	console.log("数据写入成功！");
		// })
		var body = '';
		var data = '';
		
		request.on('data', (chunk) => {
			body += chunk;
		})

		request.on('end', () => {
			data = fs.readFileSync('book.json');
			console.log(data.toString('utf-8'));
			fs.writeFile('book.json', data.toString('utf-8'), function(err) {
				if (err) {
					return console.error(err);
				}
				console.log("数据写入成功！");
			})
			// console.log(body)
			// response.write(body)
		})
	}
}).listen(port)

console.log('server is running in http://127.0.0.1:' + port);