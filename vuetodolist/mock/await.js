import fs from 'fs'
import path from 'path'
import request from 'request'

var movieDir = __dirname + '/movies',
    exts     = ['.mkv', '.avi', '.mp4', '.rm', '.rmvb', '.wmv'];

var readFiles = function() {
    return new Promise((resolve, reject) => {
        fs.readFile(movieDir, function(err, file) {
            resolve(file.filter((v) => exts.includes(path.parse(v).ext)));
        })
    })
}

var getPoster = function () { 
    let url = `https://api.douban.com/v2/movie/search?q=${encodeURI(movieName)}`

    return new Promise((resolve, reject) => {
        
    })
 }