// util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心JavaScript 的功能 过于精简的不足。

// 继承 util.inherits(constructor, superConstructor) 实现对象间原型继承 的函数

var util=require('util');


var Person=function(){
  this.name='Person';
  this.age='28';
  this.say=function(){
    console.log("This is Person --> this: ",this);
  }
}

Person.prototype.eye='two';
Person.prototype.action=function(){
  console.log("this-> ",this);
}


var YellowPerson=function(){
  this.sign='yellow';
}

util.inherits(YellowPerson,Person);

var yp1=new YellowPerson();

yp1.action();

// util.inspect(object,[showHidden],[depth],[colors])
//  是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。


// util.isArray(object)
//  如果给定的参数 "object" 是一个数组返回true，否则返回false。


// util.isRegExp(object)
//  如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。


// util.isDate(object)
//  如果给定的参数 "object" 是一个日期返回true，否则返回false。


// util.isError(object)
//  如果给定的参数 "object" 是一个错误对象返回true，否则返回false。




















//
