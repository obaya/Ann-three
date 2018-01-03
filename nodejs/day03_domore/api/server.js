var express = require('express');
var apiResult = require('./apiResult');
var jwt = require('jsonwebtoken');
var app = express();

// 允许跨域请求必须要设置如下：
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




app.post('/login',function(req,res){
    // 在这处理前端穿过来的数据
    // 设置token
    // 从数据库获取信息
    var user = {name:'shan'};
    var token = jwt.sign(user,'secret',{'expiresIn':1000});
    // 将token返回给前端
    res.send(apiResult(true,token));
})

app.get('/students',function(req,res){
// console.log(req)
    // 拿到前端传过来的token
    var token = req.headers['authorization'];
    // var token = req.headers.authorization;

    // 验证token
    jwt.verify(token,'secret',function(error,result){
        if(error){
            res.send(apiResult(false,[],'请求信息有误'));
        }else{

            // 连接数据库，核查相关信息，再返回给前端
            var dataset = [{name:'yang',age:17}]
            res.send(apiResult(true,dataset));
        }
    })
  

})

app.post('/resigner',function(req,res){
    res.send(apiResult());

})

app.listen(666,function(){
    console.log('成功开启服务器');

})