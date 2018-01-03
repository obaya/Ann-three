var http = require('http');
var querystring = require('querystring');

http.createServer(function(req,res){
    // 定义一个post变量，用于暂存请求体的信息
    var post = '';

    // 通过req的data事件监听函数，每当接收到请求体的数据，就累加到post变量中 
    req.on('data',function(chunk){
        post += chunk;
    });

    // 在end事件触发后，通过querystring.parse将post解析为真正的post请求格式，然后向客户端反馈
    req.on('end',function(){
        post = querystring.parse(post);
        console.log(post);
        res.end('123');
    });

}).listen(666);
