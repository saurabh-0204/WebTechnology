

var exp = require('express');

//app represents server application
var app = exp();

app.listen(9000,function() {
	console.log('Server Started');
})

app.use(exp.static('images'));
app.use(exp.static('styles'));

app.get('/loginform',function(req,res){
	res.sendFile(__dirname+"/loginform.html");
})

app.get('/logincheck',function(req,res){
	//query parameters
	if(req.query.uid == 'object' && req.query.pwd == 'object123')
		res.send("<img src='ok.jpg' width='400px' height='400'>");
	else
		res.send("<h1> Login failed </h1>");
})

app.all('*',function(req,res){
	res.send("<p> Please check URL </p>");
})


