$(document).ready(function(){
    $("#formu_3").submit(function(e){
        e.preventDefault();
        var anno = moment().format('YYYY');
        var sem = moment().format('WW');
        var hoy = (anno+"-W"+sem);
        var fecha = $("#unasemana").val();

if(fecha<hoy){
        mensajec+="No se pueden seleccionar semanas anteriores a la de hoy.<br>";
        entrar=true;
        }
    })
 })