var exp=require('express');
var app=exp();
var mysql=require('mysql2');

app.use(exp.static('resources'));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "know_it"
})

con.connect(function(err){
    if(!err)
    console.log("db connected");
else
    console.log("dn con failed : "+err.toString());    
})

app.get('/empform',function(req,res){
    res.sendFile(__dirname+"/empform.html");
})

app.get('/getEmpDetails',function(req,res){
    var eno = req.query.empid;
    var query = "select * from emp where empno = "+eno;
    con.query(query,function(err,result){
          if(!err)
          {
              res.write("<p> Emp name : "+result[0].ENAME+"</p>");
              res.write("<p> Dept no : "+result[0].DEPTNO+"</p>");
              res.write("<p> Salary : "+result[0].SAL+"</p>");
              res.end();
          }
          else{
                   res.write("Enter Valid ID")
          }
    })
})

app.listen(9000,function(){
    console.log("Server Started");
})

app.all('*',function(req,res){
    res.send("<p>Not Reachable</p>");
})