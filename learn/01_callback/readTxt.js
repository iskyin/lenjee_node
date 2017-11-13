var fs = require("fs");

var data = fs.readFileSync('data.json');

var dataObj=JSON.parse(data);
console.log(dataObj);
console.log("程序执行结束!");
