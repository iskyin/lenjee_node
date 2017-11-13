
// 起服务
var http=require('http');
var server=http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('Hello World \n ');
})
server.listen(3333,'127.0.0.1');
console.log('Server running at http://127.0.0.1:3333');

// 解析URL
var url=require("url");
console.log("解析链接 -> : ");
console.log(url.parse('http://www.lenjee.com:8080/index.html',true));

// 处理参数值
var querystring=require('querystring');
var qsObj={Name:"lenjee",FirstName:["子","伯"],Post:"GJQDGCS"};
console.log('处理数据 -> : ',qsObj);
console.log(querystring.stringify(qsObj));
