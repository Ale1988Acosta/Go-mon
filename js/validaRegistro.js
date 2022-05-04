
var expr= /^[a-zA-Z]+\s?[a-zA-Z]+?\s?$/;
var dir= /^[a-zA-Z\d?\s?]+\s?\W?\d+$/;
var regex = /[\w-\.]{2,}@[a-zA-Z0-9._-]+\.[\w-]{2,4}/;
var esp = /^[a-zA-Z\d?]+$/;
var conta = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
var msj = document.getElementById("#mensaje");

$(document).ready(function(){
    $("#reg").click(function(e){
        e.preventDefault();
        var contra = $("#cont").val();
        var nomb = $("#nomb").val();
        var ape = $("#Ap").val();
        var direc = $("#direc").val();
        var mail = $("#email").val();
        var rcont = $("#rcont").val();
        let mensajeMostrar ="";
        let entrar = false;

        //validación del nombre
        if(nomb == "" || !expr.test(nomb)){
            $("#mensajeN").fadeIn();
            return false;

        }else{
            $("#mensajeN").fadeOut();

            //validación del apellido
            if(ape == "" || !expr.test(ape)){
                $("#mensajeA").fadeIn();
                return false;
            }else{
                $("#mensajeA").fadeOut();

                //validación de la dirección
                if(direc == "" || !dir.test(direc)){
                    $("#mensajeD").fadeIn();
                    return false;
                }else{
                    $("#mensajeD").fadeOut();

                    //validación del correo
                    if(mail == ""|| !regex.test(mail)){
                        $("#mensajeC").fadeIn();
                        return false;
                    }else{
                        $("#mensajeC").fadeOut();

                        if(contra == "" || !conta.test(contra)){
                            $("#mensajeLarg").fadeIn();
                            return false;

                        }else{
                            $("#mensajeLarg").fadeOut();
                            

                            if(rcont == "" || contra != rcont){
                                $("#mensajeIg").fadeIn();
                                return false;

                            }else{
                                $("#mensajeIg").fadeOut();
                                onclick=$(location).attr('href','eres.html');
                            }
                        }

                    }
                }
            }
        }

    });


    

})