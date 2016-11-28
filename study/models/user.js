// function User() {
//   //成员变量
//   this.id;
//   this.name;
//   this.age;
//   this.enter = function () {
//     console.log('进入图书馆');
//   }
// }
module.exports = {
  user : function () {
    //成员变量
    this.id;
    this.name;
    this.age;
    this.enter = function () {
    console.log(this.name + '进入图书馆');
    
    }
  }
}