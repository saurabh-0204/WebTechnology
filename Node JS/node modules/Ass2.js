exports.isPrime =function(num){

var cnt=0;
for(let i=1;i<=num;i++){
 if(num%i==0)
    cnt++;
}

if(cnt==2)
return true;
else
return false;

}

exports.calFact=function(no){
let fact=1;
   for(let i=no;i>=1;i--)
       fact=fact*i;

return fact;

}

exports.isPerfect=function(num){
let sum=0;
let temp=num;
for(let i=1;i<num;i++)
if(num%i==0)
  sum+=i;

if(sum==temp)
return true;
else 
return false;
}