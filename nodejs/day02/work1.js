// 作业1----读取静态资源



var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
var util = require('util');
// console.log(util);
var fileType = {
    'txt':'text/plain',
    'html':'text/html',
    'css':'text/css',
    'xml':'application/xml',
    'json':'application/json',
    'js':'application/javascript',
    'jpg':'image/jpeg',
    'jpeg':'image/jpeg',
    'png':'image/png',
    'gif':'image/gif',
    'svg':'image/svg+xml'
}


// 当response是404时在页面上呈现如下：找不到访问的路径
var page_404 = function(request,response,path){

    response.writeHead(404,{'Content-type':'text/html'});

    response.write('<!doctype html>\n');
    response.write('<title>404 Not Found</title>\n');
    response.write('<h1>Not Found</h1>');
    response.write('<p>The request URL' + path + 'was not found on this server.</p>');
    response.end();
}

// 当response状态是500时，呈现如下：服务器响应有误？
var page_500 = function(request,response,error){

    response.writeHead(500,{'Content-type':'text/html'});

    response.write('<!doctype html>\n');
    response.write('<title>Internal Server Error</title>\n');
    response.write('<h1>Internal Server Error</h1>');
    response.write('<pre>' + util.inspect(error) + '</pre>');
}

http.createServer(function(request,response){
    var urlStr = request.url; //--->请求的url地址
    var urlObj = url.parse(urlStr); //--->将url地址转为对象
    var pathname = urlObj.pathname //--->该路径下的pathname:?前面的那个字符

    var realpath = __dirname + pathname; //--->绝对路径加pathname

    // 判断------------------------------------------------------pop(删除并返回数组中的最后一个元素)
    if(request.method == 'POST' && !fileType[realpath.split('.').pop()]){

        console.log(request.method);

        // 定义一个post变量，用于暂存请求体信息
        var post = '';

        // 通过request的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        request.on('data',function(_data){
            post += _data;
        });

        // 当end事件触发时，用querystring.parse将post转为POST格式返回给客户端
        request.on('end',function(){
            post = querystring.parse(post);
            response.end(util.inspect(post));//util.inspect()将对象序列化为字符串
        })

        return;
    }

    fs.exists(realpath,function(exists){
        if(!exists){
            return page_404(request,response,pathname);
        }else{
            var file = fs.createReadStream(realpath);//返回一个文件流，预读取的内容

            response.writeHead(200,{'Content-type':fileType[realpath.split('.').pop()] || 'text/plain'});

            file.on('data',response.write.bind(response));
            file.on('close',response.end.bind(response));
            file.on('error',function(err){
                return page_500(request,response,err);
            })
        }
    })
}).listen(666);