var nom = document.getElementById("nom");

var ap = document.getElementById("ap");

var cont = document.getElementById("cont");

var rcont = document.getElementById("rcont");
 
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");

var msj = document.getElementById("mensaje");
var msj1 = document.getElementById("mensaje1");

var correo = document.getElementById("email");
var valcorreo = /[\w-\.]{2,}@[a-zA-Z0-9._-]+\.[\w-]{2,4}/;
var esValido = valcorreo.test(correo)


var rut = document.getElementById("rut")


form1.addEventListener("submit" , e/* nombre, puede ser cualquiera*/  => {
    e.preventDefault(); /* prevenir el envio del formulario */
    let mensajeMostrar ="";
    let entrar = false;

    /* Validar correo */

    if(esValido == true){
        mensajeMostrar += "<br>El correo electronico es invalido<br>";
        entrar = true;
    }
    /* Longitud del nombre */
    if(cont.value.length < 8 || cont.value.length > 16){
        mensajeMostrar += "<br>La longitud de la contraseña debe ser entre 8 y 16 caracteres<br>";
        entrar = true;
    }
        /* igualdad contraseñas */
        if(cont.value != rcont.value){
            mensajeMostrar += "<br>Las contraseñas deben ser iguales<br>";
            entrar = true;
        }
    /* Longitud del nombre */
    if(nom.value.length < 4 || nom.value.length > 7){
        mensajeMostrar += "<br>La longitud del nombre no es correcta <br>";
        entrar = true;
    }

    /* Validar si es mayuscula la primera letra*/
    var primeraletra = nom.value.charAt(0);
    if(!esMayuscula(primeraletra)){
        mensajeMostrar += "<br>La primera letra del nombre es minuscula <br>";
        entrar = true;
    }

        /* Longitud del apellido */
        if(ap.value.length < 4 ){
            mensajeMostrar += "<br>La longitud del apellido no es correcta <br>";
            entrar = true;
        }
    
        /* Validar si es mayuscula del apellido la primera letra*/
        var primeraletra = ap.value.charAt(0);
        if(!esMayuscula(primeraletra)){
            mensajeMostrar += "<br>La primera letra del apellido es minuscula <br>";
            entrar = true;
        }

        

    /* Mostrar el mensaje en el HTML*/
    if(entrar){
        msj.innerHTML = mensajeMostrar;
    }
    else{
        msj.innerHTML = "<br>Datos guardados correctamente";
    }

});


form2.addEventListener("submit" , a/* nombre, puede ser cualquiera*/  => {
    a.preventDefault(); /* prevenir el envio del formulario */
    let mensajeMostrar1 ="";
    let entrar1 = false;

    /* Longitud del rut */
    if(rut.value.length < 11 || rut.value.length > 13){
        mensajeMostrar1 += "<br>La longitud del rut no es correcta <br>";
        entrar1 = true;
    }
        

    /* Mostrar el mensaje en el HTML*/
    if(entrar1){
        msj1.innerHTML = mensajeMostrar1;
    }
    else{
        msj1.innerHTML = "<br>Datos guardados correctamente";
    }
});

/* Funcion para preguntar si la letra es mayuscula*/ 
function esMayuscula(letra){
    return letra == letra.toUpperCase();
}