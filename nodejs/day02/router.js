// 自定义模块
var router = {
    GET:{
        '/' : function(request,response){
            response.write('index');
        },
        '/login' : function(request,response){
            response.write('login');
        }
    },
    POST:{
        '/register' : function(request,response){
            response.write('register');
        }
        
    }
}


module.exports = router;