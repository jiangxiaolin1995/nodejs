function User(id,name,age) {
  //成员变量
  this.id = id;
  this.name = name;
  this.age = age;
  this.enter = function () {
    console.log(this.name + '进入图书馆');
  }
}
module.exports = User;
// module.exports = {
//   User : function () {
//     //成员变量
//     this.id;
//     this.name;
//     this.age;
//     this.enter = function () {
//     console.log(this.name + '进入图书馆');
    
//     }
//   }
// }
