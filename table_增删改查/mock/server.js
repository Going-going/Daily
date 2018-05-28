const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const port = '9000'

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end('1111')
})

server.listen(port)

console.log('server is running at http://127.0.0.1:' + port)