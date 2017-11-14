// 引入 events 模块
var events=require("events");

// 创建 eventEmitter 对象
var eventEmitter=new events.EventEmitter();



var printEvent=function(){
  console.log("print --> event ");
  // 触发事件
  eventEmitter.emit("active");
}
// 绑定事件 以及 处理程序
eventEmitter.on("print",printEvent);


var active=function(){
  console.log("I can say .")
}
// 绑定事件 以及 处理程序
eventEmitter.on("active",active);


// 触发事件
eventEmitter.emit("print");
