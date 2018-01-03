// 1.允许访问静态资源


var express = require('express');
var path = require('path');
var multer = require('multer');
var fs = require('fs');
var app = express();

// 允许访问静态资源
app.use(express.static(path.join(__dirname,'/')));


// 可以自己创一个文件夹
// 先判断这个文件夹是否存在
var _path = path.join(__dirname,'/uploadFile');

if(!fs.existsSync(_path)){
    // 不存在就自己创建一个
    fs.mkdirSync(_path);
}

// 通过 filename 属性定制
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, _path);    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        console.log(file);
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        cb(null, file.originalname);  
    }
});

// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage })


// 文件上传
app.post('/upload',upload.single('myfile'),function(req,res,next){
    res.send('提交成功');
})     //------->通过pathname找到对应的方法函数，然后呈现给客户



// 中间件
var  middelware = function(req,res,next){
    console.log('我是中间件');
    next();

}
app.get('/a',middelware,function(req,res){
    console.log(666);
    res.send('中间件跑完了才能看到我');
})

// 全局中间件
app.use(function(req,res,next){
    
})


app.listen(666,function(req,res){
    console.log(222);
});