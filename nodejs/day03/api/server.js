//分布式开发：前后端分离
var express = require('express');
var path = require('path');
var jwt = require('jsonwebtoken');
console.log(jwt);
var app = express();

var apiresult = require('./apiresult');
//同域的话要允许访问静态资源
//app.user(express.static(path.join(__dirname,'/')));

//解决跨域：允许跨域请求
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

//登录使用post
app.post('/login',function(req,res){
    //连接数据库，返回给前端一些内容，让前端好判断，进行登录，进入students
    //var token = 'fjdsahf93480329';
    //从数据库获取信息
    var user = {
        username:'admin',

    }
    var token = jwt.sign(user,'secret',{
        //设置过期时间
        'expiresIn':1800
    })
    //把token返回给前端login
    res.send(apiresult(true,token));//每一个路由返回给前端的对象结构都会是一致的
})


//login成功会进入到主页面:一般是用get请求将数据请求过来
//一般有s表示一个很多数据的列表，没有s表示没有数据的编辑界面
app.get('/students',function(req,res){
    //获取前端请求过来的token
    //var token = req.query.token;


    //放在请求头中的token通过req.headers获取客户端的请求头
    var token = req.headers.authorization;
    console.log(token)
    //验证token
    jwt.verify(token,'secret',function(error,result){
        if(error){
            //如果错误，返回给前端错误信息
            res.send(apiresult(false,[],'登录信息有误'));
        }else{
            //解密token
            //
            //解密之后判断是否合理，再返回数据给前端
            //
            //连接数据库，进行学生信息查询等等
            var dataset = [
                {name:'yang',age:10},
                {name:'shan',age:12},
                {name:'chen',age:1}
            ]

            res.send(apiresult(true,dataset));
        
        }
    })
})

//注册使用post
app.post('/register',function(req,res){
    res.send(apiresult());
})



app.listen(666,function(){
    console.log('服务器开启成功');
})