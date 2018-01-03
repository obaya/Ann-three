// var url = require('url');


// // url.parse字符串转对象
// var urlobj = url.parse('http://www.dk-lan.com/one?a=index&t=article&m=default#dk',true);

// console.log(urlobj);//url.query是一个对象{a:'index',t:'article',m='default'}


// var urlobj = url.parse('http://www.dk-lan.com/one?a=index&t=article&m=default#dk',false);
// console.log(urlobj);//url.query是一个字符串'a=index&t=article&m=default#dk'




// url.format(urlObj)对象转字符串
// 
// var urlObj = {
//     url:'http://www.dk-lan.com',
//     name:'yang',
//     age:18,
// }

// var a = url.format(urlObj);
// console.log(a);





// var res = url.resolve('http://dk-lan.com/','/one');

// console.log(res);





// var querystring = require('querystring');
// querystring查询（参数）模块
// querystring.parse:字符串转对象
// var str = 'name=yang&age=18&home=haizhu';

// var res = querystring.parse(str);

// console.log(res);

// 对象转字符串querystring.stringify()
// var param = {
//     name:'yang',
//     age:18,
// }

// var str = querystring.stringify(param);
// console.log(str);







// 参数接收---get
var http = require('http');
var url = require('url');
var querystring = require('querystring');

// http.createServer(function(request,response){
//     var params = url.parse(request.url,true).query;//字符串转为数组
//     response.end(params);
// }).listen(666);


// post
http.createServer(function(request,response){
    // 定义一个post变量，用于暂存请求体信息
    var post = '';

    // 通过request事件监听函数，每当接收到请求提的数据，就累加到post变量中
    request.on('data',function(_data){
        post += _data;

    })

    // end事件触发后，通过querystring.parse将post解析为真正的post请求格式，然后向客户端返回
    request.on('end',function(){
        post = querystring.parse(post);//转为数组
        response.end('123');
        console.log(post)
    })
}).listen(666);