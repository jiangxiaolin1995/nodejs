
var optfile = require('./models/optfile'); 



module.exports= {
  login : function (req,res) {
    //res.write('我是login方法');
  
    function recall(data) { //一个闭包函数 带有一个形参 
      res.write(data);
      res.end(' ');//不写则没有http协议尾,但写了会产生两次访问  开始一次 停止一次
    
    }
    optfile.readfile('./views/login.html'/*,response*/,recall); 
  }
  ,zhuce : function (req,res) {
  
    function recall(data) { //一个闭包函数 带有一个形参 
      res.write(data);
      res.end(' ');//不写则没有http协议尾,但写了会产生两次访问  开始一次 停止一次
      
    }
   // res.write('我是注册方法');
   optfile.readfile('./views/zhuce.html'/*,response*/,recall); 
   

  }
  ,writefile :function (req,res) {
     function recall(data) { //一个闭包函数 带有一个形参 
      res.write(data);
      res.end(' ');//不写则没有http协议尾,但写了会产生两次访问  开始一次 停止一次
      
    }
    optfile.writefile('./views/one.txt','写入内容',recall)
    
  }
  ,showimg : fun
  {

  
  }
  
}
