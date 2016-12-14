var globalVariable  = 'This is global variable';  

function globalFunction() {
  var localVariable = 'This is local variable';
  console.log(globalVariable);
  console.log(localVariable);
  globalVariable = 'this changed'
  console.log(globalVariable);

  function localFunction() {
    var innerLocalVariable = 'this is inner local Variable';
    console.log(globalVariable);
    console.log(localVariable);
    console.log(innerLocalVariable);
    
  }
}
globalFunction();