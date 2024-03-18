var hp=require('http');

var server=hp.createServer(function(req,resp){
   resp.writeHead(200,{'content-type':'text/html'})
   resp.write("<h1> Hii From Node JS server </h1>");
   resp.end();
});

server.listen(9000,function(){
        console.log("Server Started");
});