var optfile = require('./models/optfile');
var url = require('url');
var querystring = require('querystring'); //post需导入

function getRecall(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html;  charset=utf-8'
  });


  return recall;
}

module.exports = {
  login: function (req, res) {
    //res.write('我是login方法');
    //--------get方式接收参数----------------  
    // var rdata = url.parse(req.url, true).query;
    // console.log(rdata);
    // if (rdata['email'] != undefined) {
    //   console.log(rdata['email']);
    //   console.log(rdata['pwd']);
    // }

    //-------post方式接收参数----------------      

    var post = ''; //定义了一个post变量，用于暂存请求体的信息      

    req.on('data', function (chunk) { //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中      
      post += chunk;
    });
    //-------注意异步-------------      
    req.on('end', function () { //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。      
      post = querystring.parse(post);
      console.log('email:' + post['email'] + '\n');
      console.log('pwd:' + post['pwd'] + '\n');

      var arr = ['email', 'pwd'];

      function recall(data) {
        dataStr = data.toString();
        for (var i = 0; i < arr.length; i++) {
          re = new RegExp('{' + arr[i] + '}', 'g'); // /\{name\}/g
          dataStr = dataStr.replace(re, post[arr[i]]);
        }
        res.write(data.toString());
        //res.end(''); //不写则没有http协议尾,但写了会产生两次访问  开始一次 停止一次
      }
      //第十二节课第一次修改 把recall注释了
      //recall = getRecall(req, res);

      optfile.readfile('./views/login.html' /*,response*/ , recall);

      //后台文件路径错误或者文件不存在
      optfile.readfile('./views/login.html' /*,response*/ , recall);
    });

  },
  zhuce: function (req, res) {
    recall = getRecall(req, res);
    // function recall(data) { //一个闭包函数 带有一个形参 
    //   res.write(data);
    //   res.end(' ');//不写则没有http协议尾,但写了会产生两次访问  开始一次 停止一次

    // }
    // res.write('我是注册方法');
    optfile.readfile('./views/zhuce.html' /*,response*/ , recall);


  },
  writefile: function (req, res) {

    function recall(data) { //一个闭包函数 带有一个形参 
      res.write(data);
      res.end(' '); //不写则没有http协议尾,但写了会产生两次访问  开始一次 停止一次

    }
    optfile.writefile('./views/one.txt', '写入内容', recall)

  }



  //显示图片有问题 找不到啊！！！！！！！！！！！！！！！！！
  ,
  showimg: function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'image/jpeg'
    });

    optfile.readImg('./imgs/1.png', res);

  }




}

//同步方法 直接try catch 
//异步方法 直接在optfile 异步读取文件里 直接调用回电函数