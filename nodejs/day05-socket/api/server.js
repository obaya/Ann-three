// 开启websocket服务器
var  webserver = require('ws').Server;
var wss = new webserver({
    port:666
});

// 连接监听，当客户端连接到服务端时触发该事件
wss.on('connection',function(client){

    console.log('有人上线')
    // 消息接收监听，当客户端向服务端发送信息时触发
    client.on('message',function(_mess){

        wss.clients.forEach(function(_client){

            // 服务端将消息发送出去
            _client.send(_mess);
        })
    });

    // 连接断开监听，客户端断开与服务器的连接时触发
    wss.on('close')
})
