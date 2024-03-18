var exp=require('express');
var bp=require('body-parser');
var mysql=require('mysql2');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"know_it"
})

var app=exp();
app.use(bp.urlencoded({extended: false}));

app.use(exp.static('scripts'));


app.listen(9000,function(){
    console.log("Server Started");
})

con.connect(function(err){
    if(!err){
        console.log("Connection done");
    }
    else
    console.log("Failed to connect"+err.toString())
})



app.get('/emp',function(req,res){
    res.sendFile(__dirname+"/Ass1.html") ;
    //console.log("In emp get after file send");
})

app.post('/getEmps',function(req,res){
    var dno = req.body.deptno;
    var query="select empno,ename,job,sal,deptno from emp where deptno = "+dno 
   // console.log(query)
    con.query(query,function(err,result){
        if(!err){
            res.send(JSON.stringify(result));
        }
    })
})


app.all("*",function(req,res){
    res.send("<p> URL is Unknow</p>")
})