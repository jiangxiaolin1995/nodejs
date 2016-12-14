/*
浏览器搜索后发生了什么

1、浏览器搜索自身的DNS缓存
2、搜索操作系统自身的DNS缓存（浏览器没有找到缓存或者缓存已经失效）
3、读取本地的HOST文件
4、浏览器发起一个DNS的系统调用
  1）宽带运营商服务器查看本身缓存
  2）运营商服务器发起一个迭代DNS解析的请求
5、浏览器获得域名对应的ip地址后，发起HTTP“三次握手”
6、TCP/IP连接建立起来后，浏览器就可以向服务器发送HTTP请求了，使用了比如说，用HTTP的GET方法请求一个根域名里的一个域名协议可以采用HTTP1.0的一个协议
7、服务器端接收到了这个请求，根据路径参数，经过后端的一些处理之后，把处理后的一个结果的数据返回给浏览器
8、开始解析和渲染页面


*/