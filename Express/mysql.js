var exp = require('express');
var mysql=require('mysql2');
var app = exp();

app.listen(9000,function() {
	console.log('exp server - 9000');
})

var conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"know_it"
});

conn.connect(function(err){
     if(!err)
     {
        console.log("Server Started");
     }
})

app.get('/employee', function (req, res) {

    conn.query("select * from emp", function (err, result) {

        if (!err) {
            res.write("<table border=2 style='border-collapse: collapse;' >");
            res.write("<th>"+"EMPNO"+"</th>");
          res.write("<th>"+"EName"+"</th>");
          res.write("<th>"+"JOB"+"</th>");
          res.write("<th>"+"HIREDATE"+"</th>");
          res.write("<th>"+"SAL"+"</th>");

            result.forEach(function (emp) {
                res.write("<tr>");
                res.write("<td>" + emp.EMPNO + "</td>");
                res.write("<td>" + emp.ENAME + "</td>");
                res.write("<td>" + emp.JOB + "</td>");
                var date=new Date(emp.HIREDATE);
               var k= date.toDateString();
                res.write("<td>"+k+"</td>");
                res.write("<td>" + emp.SAL + "</td>");
                res.write("</tr>")
            })
            res.write("</table>");
            res.end();
        }

    })

})
app.all('*',function(req,res){
    res.send("<p>Not in Database </p>");
})
