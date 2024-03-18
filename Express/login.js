var exp = require('express');

//app represents server application
var app = exp();

app.listen(9000,function() {
	console.log('exp server - 9000');
})

//diff route handlers
//route handler - req method + req url
app.get('/welcome',function(req,res){
	res.send("<h1> Welcome to EXPRESS </h1>");
});

app.get('/home',function(req,res){
	res.write("<h1> Express JS </h1>");
	res.write("<h3> Easier web development </h3>");
	res.write("<p> Can provide diff route handlers </p>");
	res.write("<p> Can create diff middlewares </p>");
	res.end();
});

app.get('/loginform',function(req,res){
	res.sendFile(__dirname+"/loginform.html");
})

app.get('/logincheck',function(req,res){
	//query parameters
	if(req.query.uid == 'object' && req.query.pwd == 'object123')
		res.send("<h1> Login is successful </h1>");
	else
		res.send("<h1> Login failed </h1>");
})



//default route handler
app.all('*',function(req,res){
	res.send("<p> Please check URL </p>");
})


