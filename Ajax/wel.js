var exp=require('express');

var app=exp();
app.listen(9000,function () {
    console.log("Server Start")
})
app.get('/nameinfo',function(req,res){
    res.sendFile(__dirname+"/welcome.html");
    
    
})
app.get('/welcome',function (req,res) {
    var name=req.query.name;
    res.send("<h1>WELCOME "+name+"<h1>");
})
app.all('*',function(req,res){
    res.send("<h1>Invalid URL</h1>")
})
