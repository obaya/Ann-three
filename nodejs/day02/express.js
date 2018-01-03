var express = require('express');
var bp = require('body-parser');
var urlencodedParser = bp.urlencoded({extended:false});
console.log(urlencodedParser);

var app = express();


// 定义端口
// app.listen(666,function(){
//     console.log('Server running on http://localhost:666');
// })

app.get('/',function(request,response){
    response.end('index');
})

app.get('/login',function(req,res){
    // res.write('123');
    // res.end();
    res.send({name:'yang',age:19})
    console.log(req.query);
})


app.post('/register',urlencodedParser,function(req,res){
    console.log(req.body);
    res.send();
})
app.listen(666);