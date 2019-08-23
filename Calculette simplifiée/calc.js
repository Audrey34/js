var nombre1 = prompt("Entrez un nombre :"), nombre2 = prompt("Entrez un nombre :"), ope = prompt("+ , - , x , /");

switch (ope){
    case("-"):
    alert(parseInt(nombre1) - parseInt(nombre2));
    break;
 case("+"):
alert(parseInt(nombre1) + parseInt(nombre2));
break;

    case("x"):
    alert(parseInt(nombre1) * parseInt(nombre2));
break;
    case("/"):
    alert(parseInt(nombre1) / parseInt(nombre2));
    break;
}
