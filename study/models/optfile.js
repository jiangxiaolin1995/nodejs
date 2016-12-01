
var fs = require('fs'); // node自带操作文件的类

module.exports = {
   //同步读取文件
  readfileSync : function (path) {  //同步读取
    var data = fs.readFileSync(path,'utf-8'); // 用utf-8的方式去读这个路径 得到的是utf-8编码的字符串
    console.log(data);  // data是所读取的文件里的信息
    console.log('同步方法执行完毕');
    return data;
  }

   //异步读取文件
  //optfile函数的readfile方法 带有两个形参 接受n5中传过来的两个实参
  ,readfile : function (path/*,res*/,recall) {
    fs.readFile(path,function (err,data) {
      if(err){
        console.log(err);
        
        //如果在router里的文件读取不到 解决办法
        recall('文件不存在');

      }else{
        console.log(data.toString());
        //res.write(data);  //write after end 因为异步的原因 会先结束end 在之后就不会进行write方法
        recall(data);
        //因为recall是闭包函数，在n5中的response会保存下来
    }
    });
    console.log('异步方法执行完毕')
  }
   //异步写文件
  ,writefile : function (path,data ,recall) {
    fs.writeFile(path ,data ,function(err) {  //往文件里写data
      if(err){
        throw err;

      }
      console.log('文件被保存');
      recall('写文件成功');

    })
  }

   //同步写入文件
  ,writeFileSync : function (path,data) {
    fs.writeFileSync(path,data);
    console.log('同步文件完成');
  }

  //读取图片
  ,readImg : function (path,res) {
    fs.readFile(path,'binary',function (err,filedata) {
      if(err){
        console.log(err);
        return;
      }else{
        
        res.write(filedata,'binary');
        res.end();
      }
    });
  }
  ,expfun:function(flag){      
        if(flag==0){      
            throw  '我是例外';      
        }      
        return  "success";      
    }      
}
  