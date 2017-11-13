  var letterArr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  var numberArr=['0','1','2','3','4','5','6','7','8','9'];


// 同步 字母
var printA_Z=function (arr) {
  var i=0
  var timeID=setInterval(function(){
    if(i<arr.length){
      console.log("同步 字母 -> ：",arr[i]);
      i++;
    }else {
      clearInterval(timeID);
    }
  },250);

}

// 同步 数字
var print0_9=function(arr,callback){
  var i=0
  var timeID=setInterval(function(){
    if(i<arr.length){
      console.log("同步 字母 -> ：",arr[i]);
      i++;
    }else {
      clearInterval(timeID);
      printA_Z(letterArr);
    }
  },500);
}

var print=function(){
  print0_9(numberArr);
}

exports.print=print;
