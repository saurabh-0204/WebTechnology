var h = require('http');
var u = require('url');
var fs = require('fs');

var server = h.createServer(function(req,res){
	var url_p = u.parse(req.url,true);
	var path = url_p.pathname;
	var str = "\nRequest received for "+path+" at "+new Date();
	//console.log(str);
	fs.appendFile('log.txt',str,function(err){
		if(!err)
		{
			console.log("log generated");
			res.writeHead(200,{'content-type':'text/html'});
			res.write("<h1>Request is logged  </h1>");
			res.end();
		}
	});
});

server.listen(9000,function() {
	console.log("server - 9000");
})