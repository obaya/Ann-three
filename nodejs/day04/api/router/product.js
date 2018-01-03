var jwt = require('jsonwebtoken');
var database = require('../database/DBhelpler')
// 每个模块中创建自己的路由，并暴露出去，由index接收

module.exports = {
    // 接收index调用时出过来的参数app
    product:function(app){
        app.post('/add',function(req,res){
            res.send('add');
        });

        app.post('/delete',function(req,res){
            res.send('delete');
        });

        app.get('/products',function(req,res){
            res.send('products');
        });

        app.post('/change',function(req,res){
            res.send('change');
        });
    }
}