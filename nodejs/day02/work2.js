// 引入模块
var express = require('express');

var multer = require('multer');

var path = require('path');

// 设置上传目录
var unload = multer({dest:path.join(__dirname,'temp')});

// 开启服务
var app = express();

// 单文件上传
app.post('/singleUpload',unload.single('thumbnail'),function(req,res,next){
    console.log(req.file);//请求的文件
    console.log(req.body);//请求query
    res.end('上传成功');
    // req.files.thumbnail.path
})
 app.listen(666);