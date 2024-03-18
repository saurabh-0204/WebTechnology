var exp = require('express');
var mysql = require('mysql2');
var cors = require('cors');
var bp = require('body-parser');

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "practise"
});

var app = exp();
app.use(cors());
app.use(bp.json());


con.connect(function(err){
    if(!err)
       console.log("DB Connected");
    else
       console.log("DB Failed");
});

app.listen(9000,()=>{
    console.log("exp - REST server - 9000");
});

app.post('/submit-form',(req,res)=>{
    console.log("req received");
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var password = req.body.password;
    
    var query = "insert into customer(name,email,phone,password) values(?,?,?,?)";
    con.query(query, [name,email,phone,password], (err)=> {
        if(!err) {
            res.send("success")
        } else {
            console.error("Error inserting data:", err);
            res.send("failure");
        }
    });
});


app.all('*',function(req,res) {
    res.send("Wrong URL....");
});