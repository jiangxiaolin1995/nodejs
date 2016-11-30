var  http = require('http');
var url = require('url'); //node自带方法
var router = require('./router');
http.createServer(function (request,response) {
  //createServer  http再带的方法 意思 http创建了一个web的服务 request：客户向浏览器发出的请求对象 热response：服务器端向浏览器写回的对象

    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'}); 
    //协议头 有协议头就要有协议尾
    //       输出              输出类型          文件为html类型的
     if(request.url!=="/favicon.ico"){  //清除第2次访问 

       var pathname = url.parse(request.url).pathname;
       //request.url 就拿到了 浏览器输入框里的内容

       pathname = pathname.replace(/\//,'');
       // 用正则 去掉 /  意思 用空字符串替换 /

       router[pathname](request,response);
      
    }  
}).listen(8000);  //监听8000端口
console.log('Server  running  at  http://127.0.0.1:8000/');  