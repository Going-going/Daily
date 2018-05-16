const fs = require('fs');
const http = require('http')
const url = require('url')
const slide = require('./slide.js')
const port = 9001;


http.createServer((req, res) => {

	let {pathname, query} = url.parse(req.url, true)
	
	if(pathname === '/slide'){
		res.setHeader('Content-Type', 'application/json;charset=utf8')
		res.end(JSON.stringify(slide))
		console.log(typeof JSON.stringify(slide));
	}

}).listen(port)

console.log('server is running in http://127.0.0.1:' + port);