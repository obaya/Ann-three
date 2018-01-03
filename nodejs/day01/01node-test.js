// var a = 1;
// var b = 2;
// console.log(a+b);


// 01node-test
 
 // http模块
var http = require('http');


// url模块：把请求的url进行转换（location.search）
// window.location.search.replace('?','').split('&')[0].split('=')---------->url.parse(url)
var url = require('url');//要使用一个模块，先把它加载进来
http.createServer(function(request,response){
    response.end('nihao');
    console.log(url.parse(request.url),true);
}).listen(666);
