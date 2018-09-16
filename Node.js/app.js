
const http = require(`http`); //引入http模块 这个模块是用来 创建http服务器的

// http.creatServer(function () {
//
// });

http.createServer((request, response)=>{
    //request 请求对象 浏览器请求服务器 服务器所有的内容保存在这个对象里
    //response 响应对象 服务器响应浏览器的所有方法

    response.writeHead(200,{'Content-Type':'text/html'});//响应头部 200为状态码

    response.end("GG!")                                  //响应结束

}).listen(233);                                           //.listen()监听端口的
