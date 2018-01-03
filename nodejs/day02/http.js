var http = require('http');

var url = require('url');

// 加载自定义模块
var zi = require('./router');

http.createServer(function(request,response){
    // 获取请求的url
    var urlStr =  request.url;

    // 将url转为对象
    var urlObj = url.parse(urlStr,true);


    // var pathname = url.parse(request.url).pathname; 
    // if(pathname == "/favicon.ico"){ 
    //     return; 
    // }
    // 如果文件名不存在
    if(!zi[request.method][urlObj.pathname]){

        response.writeHead(200,{'Content-type':'text/html;charset = utf-8'})
        // 输出
        response.write('路径无效');
    }else{
        // 执行自定义模块中的函数
        zi[request.method][urlObj.pathname](request,response);
    }
    response.end();

}).listen(666);




