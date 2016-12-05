// function fun2(res) {
//   console.log('fun2');
//   res.write('我是fun2');
// }
// module.exports = fun2;  // 只支持一个函数

//module.exports和exports. 区别 module.exports是真实存在的东西 exports.是module的辅助方法

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