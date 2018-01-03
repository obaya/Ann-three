var jwt = require('jsonwebtoken');

// 引入数据库
var db = require('../database/DBhelpler');

// 连接mongodb----两种方式都可以
var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('mydb', server, {safe:true});
db.open(function(err, collection){
    if(!err){
        console.log('连接成功');
    }else{
        console.log('连接失败');
    }
})

// 暴露路由给index
module.exports = {
    user:function(app){
        app.post('/login',function(req,res){
            // 连接数据库
            res.send('login');

        });

        app.post('/register',function(req,res){
            res.send('register');

        });
    }
}