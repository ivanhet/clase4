function mostrar()
{
//tomo la edad  
var mesDelAnio = document.getElementById('mes').value;

switch(mesDelAnio)

{
    
    case "Febrero":
        alert(" tiene 29 dias")
        break;

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        alert("Tiene 30 dias");
        break;
    
        default: 
        alert("tiene 31 dias")
        

    
    
}



}//FIN DE LA FUNCIÓN