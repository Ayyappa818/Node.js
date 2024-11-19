var http = require('http');
var fs=require('fs')
var url=require('url')
console.log(url)
// console.log(http)
http.createServer(function(req,res){
    if(req.url=="/"){
        res.end("<b>Swamy</b>")
    }
    if(req.url=="/home"){
        // res.end('<h1>Ayyappa</h1>')
        var data =fs.readFileSync("KbdPlayers.html").toString();
        res.end(data)
    }
}).listen(4100)