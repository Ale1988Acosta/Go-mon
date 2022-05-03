$(document).ready(function(){
    $("#formu_2").submit(function(e){
        e.preventDefault();
        let mensajesh ="";
        let entrar = false;
        var hi = $("#hijo").val();

        //nombre
        if(hi.trim().length<3){
            mensajesh += "El nombre debe contener mas de tres letras<br>";
            entrar=true;
        }

        //p_apellido
        if($("#pr_apellido").val().trim().length==0){
            mensajesh += "Debe ingresar el primer apellido<br>";
            entrar=true;
        }
        
        //s_apellido
        if($("#se_apellido").val().trim().length==0){
            mensajesh += "Debe ingresar el segundo apellido<br>";
            entrar=true;
        }

        //fecha de nacimiento
        //transforma el valor en una fecha (usando la clase Date  DD/MM/AA) y obtén el valor del año con el método getFullYear().
        var star = $("#start").val();
        var dat = new Date().toLocaleDateString('en-CA');
        if(star>=dat){
            mensajesh +="La fecha de nacimiento debe ser anterior al dia de hoy.<br>";
            entrar=true;
        }

        if(entrar){
            $("#mensaj").html(mensajesh);
        }else{
            $("#mensaj").html("Formulario enviado");
        }

    });
})


