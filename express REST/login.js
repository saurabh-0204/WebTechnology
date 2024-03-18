const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "practise"
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

con.connect(function(err){
    if(!err)
        console.log("DB Connected");
    else
        console.log("DB Failed");
});

app.listen(9000, () => {
    console.log("Express REST server running on port 9000");
});

app.post('/login', function(req, res) {
    console.log("Login request received");
    const email = req.body.email;
    console.log(email)
    const password = req.body.password;
    console.log(password)
    const query = "SELECT * FROM customer WHERE email = ?";
    con.query(query, [email], function(err, result) {
        //alert(result);
console.log(result);
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ message: "Internal Server Error" });
        }

        if (result.length > 0) {
            if (result[0].password === password) {
                res.send("success");
            } else {
                res.status(401).json({ message: "Invalid credentials" });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    });
});

app.all('*', function(req, res) {
    res.send("Wrong URL....");
});
