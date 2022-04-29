var nom = document.getElementById("nom");

var ap = document.getElementById("ap");

var cont = document.getElementById("cont");

var rcont = document.getElementById("rcont");
 
const form = document.getElementById("form1");

var msj = document.getElementById("mensaje");

form.addEventListener("submit" , e/* nombre, puede ser cualquiera*/  => {
    e.preventDefault(); /* prevenir el envio del formulario */
    let mensajeMostrar ="";
    let entrar = false;


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
        msj.innerHTML = "<br>Formulario Enviado";
    }

});

/* Funcion para preguntar si la letra es mayuscula*/ 
function esMayuscula(letra){
    return letra == letra.toUpperCase();
}