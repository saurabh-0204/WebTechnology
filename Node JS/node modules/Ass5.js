var u=require('url');
var h=require('http');

var server=h.createServer(function (req,res){
    var op=u.parse(req.url,true);
    console.log(op.query);
    console.log(op.query.name);
    console.log(op.query.color);
    
   var nm=op.query.name 
   var cl=op.query.color

  res.writeHead(200,{'content-type':'text/html'});
   res.write("<h1 style='color: "+cl+" '>Welcome "+nm+"</h1>");
   res.end();

})

server.listen(9000,function(){
 console.log("Server Started");
})