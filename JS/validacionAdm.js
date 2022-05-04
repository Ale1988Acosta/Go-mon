
var regex = /[\w-\.]{2,}@administrador\.[\w-]{2,4}/;
$(document).ready(function(){
    $("#entrar").click(function(e){
        e.preventDefault();
        var correo = $("#correo").val();
        var clave = $("#clave").val();

        if(correo == "" || !regex.test(correo)){
            $("#mensajeC").fadeIn();
            return false;
        }else{
            
            $("#mensajeC").fadeOut();
            
            if(clave == ""){
                $("#mensajeP").fadeIn();
                return false;
                

            }else{
                onclick=$(location).attr('href','adm.html');
                $("#mensajeP").fadeOut();
                

            }
          
        }
      

        
    });

    





});