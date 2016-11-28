var User = require('./User.js'); // 导入父级

function Teacheer(id,name,age) {
  User.apply(this,id,name,age[]); //如果没有构造方法 则应用到this上  this 指teacher  teacher继承user

  alert(this);
}