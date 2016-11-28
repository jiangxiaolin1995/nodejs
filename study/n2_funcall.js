var  http = require('http');
var otherfun = require('./models/otherfuns.js'); // 这里将 otherfuns 里的 fun2 起了别名 在函数中调用会报错  在这里赋值了 只能把 otherfun作为函数名

http.createServer(function (request,response) {
  //createServer  http再带的方法 意思 http创建了一个web的服务 request：客户向浏览器发出的请求对象 热response：服务器端向浏览器写回的对象

    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'}); 
    //协议头 有协议头就要有协议尾
    //       输出              输出类型          文件为html类型的
     if(request.url!=="/favicon.ico"){  //清除第2次访问  
        // fun1(response); 
        //fun2(response); // 未引用直接用fun2会报错 说 fun2 未定义  引用后悔报错 
        funname = 'fun2'; 
       // otherfun.fun2(response); //otherfun 也是未定义
        otherfun[funname](response); // 也可以用字符串这种写法  在后面可以用变量传值 在以后路由非常重要
        //otherfun.函数名 直接确定要调用哪个函数 类似属性的意思
        response.end('');//不写则没有http协议尾,但写了会产生两次访问  开始一次 停止一次
        }  
}).listen(8000);  //监听8000端口
console.log('Server  running  at  http://127.0.0.1:8000/');  

function fun1(res) {
  console.log('fun1');
  res.write('我是fun1');
}