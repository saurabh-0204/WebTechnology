var exp = require('express');
var mysql = require('mysql2');

var app = exp();

//all static resources will be found in this folder
app.use(exp.static('resources'));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "knowit"
})

con.connect(function(err){
    if(!err)
        console.log("db connected");
    else
        console.log("dn con failed : "+err.toString());  
})

app.get('/getEmpDetails',function(req,res)
{
      var eno = req.query.empid;
      var query = "select * from emp where empid = "+eno;
      con.query(query,function(err,result){
            if(!err)
            {
                res.write("<p> Emp name : "+result[0].ENAME+"</p>");
                res.write("<p> Dept no : "+result[0].DEPTNO+"</p>");
                res.write("<p> Salary : "+result[0].SALARY+"</p>");
                res.end();
            }
            else{

            }
      })
})

app.all('*',function(req,res){
    res.send("<p> URL unidentified </p>");
})
