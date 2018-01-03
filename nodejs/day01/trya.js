var fs = require('fs');
var http = require('http');
var pic = fs.readFileSync('g5.jpg','binary');
// xieru
// fs.writeFile('new.txt','第二个参数写的就是写入的内容,',function(err){
//     console.log(err);

//     // 追加写入
//     fs.appendFile('new.txt','这个是追加的内容',function(err){
//         console.log(err);

//         // 读取内容呢
//         fs.readFile('new.txt',function(err,data){
//             console.log(data.toString());
//         });

        
        
//     });
// });

// 读取图片
http.createServer(function(request,response){
    response.writeHead(200,{"Content-type":"image/jpeg"});
    response.write(pic,'binary');
    response.end();
}).listen(666);

http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'image/jpeg'});
    response.write(pic,'binary');
    response.end();
}).listen(666);