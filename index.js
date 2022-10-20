let para=document.getElementById("review").innerHTML;

let p="";
addReview=function(){
p=document.querySelector('input').value;
alert(p);
para=para+p;
document.getElementById("review").innerHTML=para;
}