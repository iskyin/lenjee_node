// POST 请求的内容全部的都在请求体中，http.ServerRequest 并没有一个属性内容为请求体，原因是等待请求体传输可能是一件耗时的工作。

var http=require('http');
var querystring=require('querystring');

var postHTML =
  '<html>'+
  '<head>'+
    '<meta charset="utf-8">'+
    '<title>菜鸟教程 Node.js 实例</title>'+
  '</head>' +
  '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
  '</body>'+
  '</html>';


var server=http.createServer(function(req,res){
  var body='';

  req.on('data',function(chunk){
    body=body+chunk;
  });

  req.on('end', function(){
    // 解析参数
    body = querystring.parse(body);

    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

    if(body.name && body.url) { // 输出提交的数据
        res.write("网站名：" + body.name);
        res.write("<br>");
        res.write("网站 URL：" + body.url);
    } else {  // 输出表单
        res.write(postHTML);
    }
    res.end();

  });

});

server.listen(4321);



































//
