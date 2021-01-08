var age=0
function number() {
  age = document.getElementById("enter").value;
  age = parseInt(age)
if(age>=17){
alert("You can watch R rate movie along")
}
else if(age>=13){
  alert("You can watch PG 13 movie along")
}
else{
  alert("You can watch G movie along")
}
}