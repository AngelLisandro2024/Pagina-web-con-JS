var parte1 = ["¡24 hechos ", "¡10 revelaciones inesperadas ", "¡13 secretos ",
 "¡56 consejos ", "¡36 verdades incomodas "];

var parte2 = ["De x famoso ","para ligar ","sobre tu marca de moviles favorita ",
"de la cerveza "];

var parte3 = ["que nunca hubieras imaginado! ", "que no podras creer! ",
"que te resultaran inesperadas! ","que te sorprenderan! "];

function obtenerNumeroAlAzar(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo)) + minimo;
}

/* var numeroAlAzar = obtenerNumeroAlAzar(10,20); */

function obtenerTitular() {
    var par1 = parte1[obtenerNumeroAlAzar(0, parte1.length)]; /* 0,1,2,3,4 */
    var par2 = parte2[obtenerNumeroAlAzar(0, parte2.length)];
    var par3 = parte3[obtenerNumeroAlAzar(0, parte3.length)];
    return par1 + par2 + par3; 
}

function generarPagina(cantidadPagina) {
    if (cantidadPagina < 1) {
        throw "Demasiado poco para llegar a los 1M de dolares";
    }
    var contenidoHTML = "";
    for (var i = 0; i < cantidadPagina; i++) {
        var imagenRandom = obtenerNumeroAlAzar(1,7);
        contenidoHTML += '<div class="col-12 col-sm-6 col-md-4 col-lg-3">';
        contenidoHTML += '<img src="img/' + imagenRandom + '.jpg" height="100px" alt="Imagen ilustrativa" class="img.fluid">';
        contenidoHTML += '<br><br>';
        contenidoHTML += '<h3><a href="#">' + obtenerTitular() + '<a/></h3>';
        contenidoHTML += '<br><br>';
        contenidoHTML += '</div>';
    }
    document.getElementById('noticias').innerHTML = contenidoHTML;
}
document.addEventListener('DOMContentLoaded', function(){
    generarPagina(10);
}, false);