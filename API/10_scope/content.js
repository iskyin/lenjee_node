var dog={
  language:"汪汪汪",
  speak:function(){
    console.log("dog -> ",this.language);
    console.log("dog -> this ：", this===dog);
  }
}
dog.speak();

console.log("---------------------------");

function cat(paras){
  this.world=paras;
  console.log("cat -> ",this.world);
  console.log("cat -> this === cat : ",this===cat);
  console.log("cat -> this === global : ",this===global);
}
cat("喵喵喵");

console.log("---------------------------");

function pig(paras){
  this.world=paras;
  console.log("pig -> ",this.world);
  console.log("pig -> this : ",this);
  console.log("pig -> this === global : ",this===global);
}
var newPig=new pig("嗷嗷嗷");
