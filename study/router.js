
var optfile = require('./models/optfile'); 

function getRecall(req,res){
  res.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
  function recall(data) {
    res.write(data);
    res.end('');//不写则没有http协议尾,但写了会产生两次访问  开始一次 停止一次
  }
  return recall;
}

module.exports= {
  login : function (req,res) {
    //res.write('我是login方法');
   
    recall = getRecall(req ,res);
    optfile.readfile('./views/login.html'/*,response*/,recall); 
  }
  ,zhuce : function (req,res) {
    recall = getRecall(req,res);
    // function recall(data) { //一个闭包函数 带有一个形参 
    //   res.write(data);
    //   res.end(' ');//不写则没有http协议尾,但写了会产生两次访问  开始一次 停止一次
      
    // }
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



  //显示图片有问题 找不到啊！！！！！！！！！！！！！！！！！
  ,showimg : function(req,res){
    res.writeHead(200,  {'Content-Type':  'image/jpeg'});
    
    optfile.readImg('./imgs/1.png',res);
    
  }

  
  
  
}

