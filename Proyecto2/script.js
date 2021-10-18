var arr1=[];
var tiempo1=(new Date()).valueOf();
for(i=0;i<800000;i++){
    arr1.push(Math.random().toString());}
var Str2= arr1.join("");
var tiempo2=(new Date()).valueOf();
console.log("Tiempo tardado: "+(tiempo2-tiempo1)+"ms");

var Str1="";
tiempo1=(new Date()).valueOf();
for(var i=0;i<800000;i++){
    Str1=Str1+Math.random().toString();
}
tiempo2=(new Date()).valueOf();
console.log("Tiempo tardado: "+(tiempo2-tiempo1)+"ms");

