var fs = require('fs'); // node自带操作文件的类

module.exports = {
  readfileSync : function (path) {  //同步读取
    var data = fs.readFileSync(path,'utf-8'); // 用utf-8的方式去读这个路径 得到的是utf-8编码的字符串
    console.log(data);  // data是所读取的文件里的信息
    console.log('同步方法执行完毕');
    return data;
  }
  ,readfile : function (path/*,res*/,recall) {
    fs.readFile(path,function (err,data) {
      if(err){
        console.log(err);

      }else{
        console.log(data.toString());
        //res.write(data);  //write after end 因为异步的原因 会先结束end 在之后就不会进行write方法
        recall(data);
    }
    });
    console.log('异步方法执行完毕')
  }
}