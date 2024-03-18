var f = require('fs')
var h = require('http')
var u = require('url')

var s = h.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){
        return
    }

    f.readFile('visit.txt',(err,data)=>{
        if(!err){
            var count = parseInt(data.toString())
            count++
            f.writeFile('visit.txt',count+"",function (err){
                console.log("visit counnt updated");
            })
            res.writeHead(200,{'content-type':'text/html'})
            res.write("<h1>visit count : "+count+"</h1>")
            res.end()
        }
        else{
            res.writeHead(200,{'content-type':'text/html'})
            res.write("<h1>File count not increased</h1>")
            res.end()
        }
        
    })
})

s.listen(9000,function (){
    console.log("server start ")
})