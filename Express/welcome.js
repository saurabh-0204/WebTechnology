var exp = require('express');

var app = exp();

app.listen(9000,function() {
	console.log('exp server - 9000');
})

app.get('/welcome',function(req,res){
	res.send("<h1> Welcome to EXPRESS </h1>");
});

app.all('*',function(req,res){
	res.send("<p> Please check URL </p>");
})
