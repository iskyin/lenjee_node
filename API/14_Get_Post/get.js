var http=require('http');
var url=require('url');
var util=require('util');

var server=http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
  var reqUrl=req.url; // 获取链接
  var objUrl=url.parse(reqUrl,true).query; // 转换为对象
  res.write("参数：",objUrl)
  res.end( );
})
server.listen(1234);

console.log("localhost:1234...");

































//
