function mostrar()
{
//tomo la edad  
var mesDelAnio = document.getElementById('mes').value;

switch(mesDelAnio)

{
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("Falta para el invierno");
        break;
    
    case "Julio":      
    case "Agosto":
        alert("Abrigate que hace frio");
        break;

    case "Septiembre":
    case "Octubre":        
    case "Noviembre":
    case "Diciembre":
    case "Enero":        
    case "Febrero":
    case "Marzo":
        alert("Ya pasamos el frio, ahora calor!!!")
}

}
//FIN DE LA FUNCIÓN