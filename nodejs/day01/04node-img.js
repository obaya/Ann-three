var http = require('http');
var fs = require('fs');

var content = fs.readFileSync('g5.jpg','binary');//同步读取

http.createServer(function(req,res){

    // 改变响应头
    res.writeHead(200,{"content-type":"image/jpeg"});
    // 写入图片
    res.write(content,"binary");

    res.end();
}).listen(666);
// console.log(content);