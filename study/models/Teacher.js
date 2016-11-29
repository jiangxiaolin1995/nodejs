var User = require('./User.js'); // 导入父级

function Teacher(id,name,age) {
  User.apply(this,[id,name,age]); //如果没有构造方法 则应用到this上  this 指teacher  teacher继承user
  // teacher继承父级user id，name,age 会进入 User 然后传到相应的地方
  this.teach = function (res) {  //没有名字 function是匿名函数
    res.write(this.name + "讲课");
  }
  
}

module.exports = Teacher;  //同样导出一下