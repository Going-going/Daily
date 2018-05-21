const http = require('http')
const fs = require('fs')
const url = require('url')

var server = http.createServer((req , res)=>{
    console.log(req.url)
})
server.listen(3000)