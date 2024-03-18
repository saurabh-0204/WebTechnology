var hp=require('http')
let path = require('./Ass3Require.js');

var server=hp.createServer(function (req,resp){
  resp.writeHead(200,{'content-type':'text/html'});

let num = [4,2,9,6,7,12,11,13];
let arr = path.isPrimeArray(num);
resp.write("<p> Prime Array </p>"+arr.toString());


let str =["shubham","omkar","Bhalerao","Bhagyashri"];
let longestStr = path.longestString(str);
resp.write("</br> Longest String is: "+longestStr);

})

server.listen(9000,function(){
console.log("server Started");
})
