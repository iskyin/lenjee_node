var http=require('http');
var url=require('url');

var start =function (route){

  var onRequest=function(request,response){
    var pathname=url.parse(request.url).pathname;
    console.log('Requst for '+pathname+' received.');
    route(pathname);
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Hello World!');
    response.end();
  }

  var ctServer=http.createServer(onRequest);
  ctServer.listen(5555);
  console.log('Server has started!');
}


exports.start=start;
