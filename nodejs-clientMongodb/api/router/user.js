var jwt = require('jsonwebtoken');



// 连接mongodb----两种方式都可以
// var MongoClient = require('mongodb').MongoClient,
//     assert = require('assert');

// // Connection URL
// var url = 'mongodb://127.0.0.1:27017/myNewDatabase';

// MongoClient.connect(url,function(err,db){
//     assert.equal(null,err);
//     console.log("Connection successfully to server");
//     db.close();
// });

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

module.exports = {
    user:function(app){
        app.post('/login',function(req,res){
            // 连接数据库
            res.send();
        })

        app.post('/register',function(req,res){
            res.send();
        })
    }
}