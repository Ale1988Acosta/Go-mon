
var regex = /[\w-\.]{2,}@[a-zA-Z0-9._-]+\.[\w-]{2,4}/;
$(document).ready(function(){
    $("#entrar").click(function(e){
        e.preventDefault();
        var correo = $("#correoC").val();
        var clave = $("#pass").val();

        if(correo ==  "" || !regex.test(correo)){
            $("#mensajeC").fadeIn();
            return false;
        }else{
            $("#mensajeC").fadeOut();
        }
            
        if(clave == ""){
            $("#mensajeP").fadeIn();
            return false;
                

        }else{
            $("#mensajeP").fadeOut();
            onclick=$(location).attr('href','perfil.html');

        }
            
          
        
      

        
    });

    $("#sub").click(function(s){
        s.preventDefault();
        var email = $("#email").val();

        if(email == "" || !regex.test(email)){
            $("#mensajeS").fadeIn();
            return false;
        }else{
            $("#mensajeS").fadeOut();
            $("#mensajeSus").fadeIn();
            $("#mensajeSus").fadeOut(2500);
            return false;




        }
    });

    





})