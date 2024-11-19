var http=require("http");
var fs=require('fs');
var url=require('url');
var path=require('path')
// console.log(http)
// console.log(url)
http.createServer(function(req,res){
    if(req.url==='/favicon.ico'){
        res.end("Hi ra babu")
    }
    else{
        var data=fs.readFileSync(path.basename(req.url))
        res.end(data.toString())
    }
}).listen(4200)