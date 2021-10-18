document.write("<h1>1. Algoritmo Hola</h1>");
for(let contador=0;contador<5;contador++){
    document.writeln("<p>Hola</p>")
}
document.write("<hr>");
//////////////////////////////////////////////////////////

document.write("<h1>2. Positivo o negativo</h1>");
var num=-15;
if(num>0) document.write("<p>El numero es positivo</p>");
else if(num=0) document.white("<p>El numero es cero</p>");
else document.write("<p>El numero es negativo</p>");
document.write("<hr>");

//////////////////////////////////////////////////////////

document.write("<h1>3. Intercambio de variables</h1>")
var a=(Math.random()*100).toFixed(0);
var b=(Math.random()*100).toFixed(0);
var c;
document.write("<p>Primera variable: </p>" +a);
document.writeln("<p>Segunda variable: </p>" +b);
c=a;
a=b;
b=c;
document.writeln("<h2>Cambio de valores</h2>");
document.write("<p>Primera variable: </p>" +a);
document.write("<p>Segunda variable: </p>" +b);
document.write("<hr>");

//////////////////////////////////////////////////////////
document.write("<h1>4. Operaciones algoritmicas</h1>");
var num1=parseInt((Math.random()*100).toFixed(0));
var num2=parseInt((Math.random()*100).toFixed(0));
var Resultado;
document.write("<p>Primer numero: </p>"+num1);
document.write("<p>Segundo numero: </p>"+num2);
Resultado=num1+num2;
document.write("<p>Resultado suma: </p>"+Resultado);
Resultado=num1-num2;
document.write("<p>Resultado resta: </p>"+Resultado);
Resultado=num1*num2;
document.write("<p>Resultado multiplicacion: </p>"+Resultado);
Resultado=num1/num2;
document.write("<p>Resultado division: </p>"+Resultado);
document.write("<hr>");
////////////////////////////////////////////////////

document.write("<h1>5. Evaluacion</h1>")

var numero1=parseInt((Math.random()*100).toFixed(0));
var numero2=parseInt((Math.random()*100).toFixed(0));
document.write("<p>numero 1: </p>"+numero1);
document.write("<p>numero 2: </p>"+numero2);
if(numero1>numero2) document.write("<p> numero 1 es mayor</p>");
else if(numero2>numero1) document.write("<p> numero 2 es mayor</p>");
else document.write("<p>Los numeros son iguales</p>");
document.write("<hr>");
////////////////////////////////////////////////////

document.write("<h1>6. Porcentaje</h1>");
var boys=parseInt((Math.random()*100).toFixed(0));
var girls=parseInt((Math.random()*100).toFixed(0));
var totalCurso=boys+girls;
var porcentaje;
document.write("<p>Niños en el curso</p>"+boys);
document.write("<p>Niñas en el curso</p>"+girls);
document.write("<p>Total de alumnos</p>"+totalCurso);
porcentaje=(boys*100)/totalCurso;
document.write("<p>Porcentaje chicos en el curso</p>"+porcentaje);
porcentaje=(girls*100)/totalCurso;
document.write("<p>Porcentaje de chicas en el curso</p>"+porcentaje);
document.write("<hr>");
///////////////////////////////////////////////////

document.write("<h1>7.Calculo superficies</h1>");
var base,altura,superficie;
base=parseInt((Math.random()*100).toFixed(0));
altura=parseInt((Math.random()*100).toFixed(0));
document.write("<h2>Superficie cuadrado</h2>");
document.write("<p>Lados: </p>"+base);
document.write("<p>Superficie: </p>"+base*base);

document.write("<h2>Superficie Rectangulo</h2>");
base=parseInt((Math.random()*100).toFixed(0));
altura=parseInt((Math.random()*100).toFixed(0));
document.write("<p>Base: </p>"+base);
document.write("<p>Altura: </p>"+altura);
document.write("<p>Superficie: </p>"+base*altura);

document.write("<h2>Superficie Triangulo</h2>");
base=parseInt((Math.random()*100).toFixed(0));
altura=parseInt((Math.random()*100).toFixed(0));
document.write("<p>Base: </p>"+base);
document.write("<p>Altura: </p>"+altura);
document.write("<p>Superficie: </p>"+(base*altura)/2);
document.write("<hr>");
//////////////////////////////////////////////////////////
document.write("<h1> Prueba bucles </h1>");
document.write("<ol>");
for (var i = 0; i <5; i++) {
  document.write("<li>a");
}
document.write("</ol>");
