/*console.log("soy ajax");*/

$("#Enviar").click(function(){
 $.ajax({
   url: './assets/js/JSON/usuario.js',
   type: 'POST',
   data: $('#Formulario').serialize(),
   success: function(res){
       $('#respuesta').html(res);
   }
 })


});

