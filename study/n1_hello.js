/*-----------------------------第一课 安装介绍----------------- */


//console.log('Hello Word');  测试
var  http  =  require('http');  //http node再带的对象
http.createServer(function  (request,  response)  {
    //createServer  http再带的方法 意思 http创建了一个web的服务 request：客户向浏览器发出的请求对象 热response：服务器端向浏览器写回的对象
  
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    //协议头 有协议头就要有协议尾
    //       输出              输出类型          文件为html类型的
    if(request.url!=="/favicon.ico"){  //清除第2次访问
        console.log('访问');
        response.write('hello,world');
        //向网页输出 hello world
        response.end('hell,世界');//不写则没有http协议尾,但写了会产生两次访问  开始一次 停止一次
        }
}).listen(8000);  //监听8000端口
console.log('Server  running  at  http://127.0.0.1:8000/');

/*
启动服务
cmd下执行：
node  n1_hello.js
浏览器访问：http://localhost:8000
*/
