var say={
  world:" 说话功能 -> : ",
  speak:function(txt){
    console.log("say -> : ",this.world,txt);
  }
}
// say.speak("好爽");

var human ={
  world:"老子是个人!",
  attribute:function(){
    console.log("属性: ",this.world);
  }
}

say.speak.call(human,"老子想说话！")
console.log("human",human);
