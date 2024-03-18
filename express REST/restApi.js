var exp = require('express')
var mysql = require('mysql2');
var cors = require('cors');

var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root",
	database:"know_it"
});

var app = exp();
app.use(cors());

con.connect(function(err){
	if(!err)
		console.log("connected");
	else
		console.log("con failed");
})

app.listen(9000, function(){
	console.log("exp - REST server - 9000");
})


app.get('/emps',function(req,res){
    //send JSON
    //comm  with db
    console.log("req received");	
    con.query("select * from emp", function(err,result) {
	if(!err)
	{
		console.log(result.length);
		res.json(result);
	}
    });
})

app.all('*',function(req,res) {
	res.send("Wrong URL");
});