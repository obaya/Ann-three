var express = require('express');
var path = require('path');

var getPro = require('./product.js');
var getUser = require('./user.js');
var app = express();

// 允许跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
});

// 允许访问静态资源
// app.user(express.static(path.join(__dirname, '/')));

module.exports = {
    start:function(_port){
        getPro.product(app);
        getUser.user(app);

        // 开启服务
        app.listen(_port,function(){
            console.log('成功开启服务');
        })
    }
}