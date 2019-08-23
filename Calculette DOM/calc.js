var x = "";
var y = "";
var ope = "";

function myFunction(monId) {
    var id = monId.id;
    if (x === "") {
        x = document.getElementById(id).innerHTML
    } else {
        y = document.getElementById(id).innerHTML;
    }
    if (y === "") {
        document.getElementById("ecran").innerHTML = x;
        document.getElementById("valeur").innerHTML = x;
    } else {
        document.getElementById("ecran").innerHTML = y;
        document.getElementById("valeur").innerHTML = y;
    }
    console.log(id);
    if (id.length > 1) {
        ope = document.getElementById(id).innerHTML;
        document.getElementById("ecran").innerHTML = ope;
        document.getElementById("valeur").innerHTML = ope;
        console.log(ope);
    }
}
function myTotal() {
    console.log(ope);
    switch (ope) {
        case ("-"):
            document.getElementById("ecran").innerHTML = (parseInt(x) - parseInt(y));
            break;
        case ("+"):
            document.getElementById("ecran").innerHTML = (parseInt(x) + parseInt(y));
            break;

        case ("x"):
            document.getElementById("ecran").innerHTML = (parseInt(x) * parseInt(y));
            break;
        case ("/"):
            document.getElementById("ecran").innerHTML = (parseInt(x) / parseInt(y));
            break;
    }
}
