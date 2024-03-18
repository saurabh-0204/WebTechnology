const { response } = require('express');
var express = require('express');
var mysql = require('mysql2');
var app = express();

app.listen(9000,function(){
    console.log('Express Server: 9000');
})

app.use(express.static("resources"))
var conn = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "root",
    database: "statecitydb"
})

conn.connect(function(err){
    if(!err){
        console.log("database connected!");
    }else{
        console.log("database not connected!");
    }
})

app.get('/regform',function(req,res){
    res.sendFile(__dirname+"/regform.html");

})

app.get('/getCities',function(req,res){
    var sid = req.query.stateid;
    var query = "select * from city where stateid = "+sid;
    conn.query(query,function(err,result){
        if(!err){
            result.forEach(function(c){
                res.write("<option value='"+c.cityid+"'>"+c.name+"</option>");
            })
            res.end();
        }
    })

})

app.all('*',function(req,res){
    res.send("Wrong URL!!");
})