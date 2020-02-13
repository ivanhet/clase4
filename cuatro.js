function mostrar()
{
var num1 
var num2 
var resta
var suma

num1 = prompt("numero uno");
num2 = prompt ("numero dos");

if (num1 == num2)
{
    alert("son iguales num1:" + num1 + "num2: " + num2);

}
else
{
    if (num1 > num2)
{
    resta = parseInt(num1)-parseInt(num2);
    alert("num 1 es mayor la resta es:" + resta);
}
else
{
suma= parseInt(num1)+parseInt(num2);
alert("Num1 es menor la suma es:" + suma);
if (suma >10)
{
alert("la suma es" + suma + " y supero el 10");
}
}
}
