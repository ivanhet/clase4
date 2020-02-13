function mostrar()
{
var precio
var desc
var total

precio = prompt("Precio");
desc = prompt("Descuento");
total = precio - (precio * desc / 100);

document.getElementById("elPrecioFinal").value = total;


}
