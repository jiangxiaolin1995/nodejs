/*-----------------------------第五课 文件读取 同步异步----------------- */

var  http  =  require('http');  //http node再带的对象
var url = require('url'); //node自带方法
var router = require('./router');
var optfile = require('./models/optfile');

http.createServer(function  (request,  response)  {
    //createServer  http再带的方法 意思 http创建了一个web的服务 request：客户向浏览器发出的请求对象 热response：服务器端向浏览器写回的对象
  
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    //协议头 有协议头就要有协议尾
    //       输出              输出类型          文件为html类型的
    if(request.url!=="/favicon.ico"){  //清除第2次访问
       
        //optfile.readfileSync('./views/login.html');
        //注意路径问题  这种方式相当于 把optfile.js中的 readfileSync方法嵌套在页面中 即路径就是相对于本页面进行查找  同步会先执行完这行代码在继续往下执行
        
        // function recall(data) { //一个闭包函数 带有一个形参 
        //   response.write(data);
        //   response.end('ok');//不写则没有http协议尾,但写了会产生两次访问  开始一次 停止一次
          
        // }
        //在前端页面打印要读取的文件 用到js中的闭包 如以上函数 recall中response会得到保存

       //第二次改动
       var pathname = url.parse(request.url).pathname;
       //request.url 就拿到了 浏览器输入框里的内容
       pathname = pathname.replace(/\//,'');
       // 用正则 去掉 /  意思 用空字符串替换 /
       console.log(pathname);
       router[pathname](request,response);
       
        console.log('主程序执行完毕');
        }
}).listen(8000);  //监听8000端口
console.log('Server  running  at  http://127.0.0.1:8000/');
