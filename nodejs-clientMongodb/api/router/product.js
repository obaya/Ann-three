var jwt = require('jsonwebtoken');

var mongodb = require('mongodb');

// 在自己的模块中创建路由，暴露给index
module.exports = {
    product:function(app){
        app.post('/add',function(req,res){
            // 连接数据库
            res.send();
        });

        app.post('/delete',function(req,res){
            res.send();
        })

        app.get('/get',function(req,res){
            res.send();
        })

        app.post('/change',function(req,res){
            res.send();
        })
    }
}