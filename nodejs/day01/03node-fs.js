
var fs = require('fs');

// 覆盖写入
fs.writeFile('add.txt','今天星期一',function(err){

    // 如果这里的参数灭有，表示灭有报错
    if(err){
        return console.error(err);
    }
    // 追加写入
    fs.appendFile('add.txt',',学习nodejs',function(err){
        console.log(err);
        // 异步读取:回调函数内部有两个参数
        fs.readFile('add.txt',function(err,data){
            console.log(data);

        })
    })


})


