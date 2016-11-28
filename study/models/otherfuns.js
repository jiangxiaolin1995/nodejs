// function fun2(res) {
//   console.log('fun2');
//   res.write('我是fun2');
// }
// module.exports = fun2;  // 只支持一个函数


//支持多个函数的写法
module.exports = {
  fun2 : function (res) {
    console.log('fun2');
    res.write('我是fun2');
  }
  ,fun3 :function(res){
    console.log('fun3');
    res.write('我是fun3');

  }
}