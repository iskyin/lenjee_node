// 加
var add =function(a,b){
  console.log("加法运算 -> 加数:",a," 被加数:",b);
  return a+b;
}

// 乘
var mul =function(a,b){
  console.log("乘法运算 -> 乘数:",a," 被乘数:",b);
  return a*b;
}

// 减
var sub =function(a,b){
  console.log("减法运算 -> 减数:",a," 减乘数:",b);
  return a-b;
}


var calculate=function(callback,arr){
  var rtn =callback(arr[0],arr[1]);
  console.log("结果 : ",rtn);
}

var toCalCulate=function(ys,arr){
  switch (ys) {
    case "+":
      calculate(add,arr);
      break;
    case "*":
      calculate(mul,arr);
      break;
    case "-":
      calculate(sub,arr);
      break;
    default:
      console.log("暂不支持此运算")
  }
}

exports.toCalCulate=toCalCulate
