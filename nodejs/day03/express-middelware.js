// 1.完成访问静态资源
// 2.完成上传路径
// 
// 
// 
// 
// 
var express = require('express');
var path = require('path');
var multer = require('multer');
var app = express();

// 允许访问静态资源
app.use(express.static(path.join(__dirname,'/')));


// 设置上传的目录
// var upload = multer({dest:path.join(__dirname,'upload')});

// 若想对上传的文件自定义名称和路径
// multer 提供了 storage 这个参数来对资源保存的路径、文件名进行个性化设置。
// destination：设置资源的保存路径。注意，如果没有这个配置项，默认会保存在 /tmp/uploads 下。此外，路径需要自己创建。
// filename：设置资源保存在本地的文件名。

// 通过 filename 属性定制
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './getFile/');    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        console.log(file);
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        cb(null, file.originalname);  
    }
});

// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage })






// 返回给前端是否提交成功
app.post('/upload',upload.single('myfile'),function(req,res,next){
    res.send('提交成功');
})

// 开启服务，打印确认服务是否开启成功
app.listen(66,function(request,response){
    console.log(888);
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             