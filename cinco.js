function mostrar()
{
var planeta = prompt("Escriba un planeta");

switch(planeta)
{
    case "tierra":
    alert(" aca vivimos");
break;

    case "mercurio":
    case "venus":
    alert("aca hace mas calor");
break;

    case "marte":
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":
    alert("aca hace mas frio");
break;

default:
    alert("no existe")
}

}
