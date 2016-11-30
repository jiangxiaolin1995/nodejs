var http = require('http');
var optfile = require('./models/optfile');



var  http  =  require('http');  //http node再带的对象
http.createServer(function  (request,  response)  {
    //createServer  http再带的方法 意思 http创建了一个web的服务 request：客户向浏览器发出的请求对象 热response：服务器端向浏览器写回的对象
  
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    response.writeHead(200,  {'Content-Type':  'image/jpeg;  charset=utf-8'});
    //协议头 有协议头就要有协议尾
    //       输出              输出类型          文件为html类型的
    if(request.url!=="/favicon.ico"){  //清除第2次访问
       
       
        optfile.readImg('./imgs/1.png' ,response);
        console.log('继续执行');

        }
}).listen(8000);  //监听8000端口
console.log('Server  running  at  http://127.0.0.1:8000/');
