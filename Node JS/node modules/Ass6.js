var h=require('http');
var fs=require('fs');
var u=require('url');

var server=h.createServer(function(req,resp){
var name=u.parse(req.url , true);
var fname=name.pathname;
var path=fname.substring(1);
resp.writeHead(200,{'content-type':'text/html'})


fs.readFile(path,function(error,data){
  if(!error)

     resp.write("<h1>"+data.toString()+"</h1>");
 
  else
    resp.write("Resource not found");
resp.end();

});

})

server.listen(9000,function(){
console.log("File Reading completed");
})