//Animación para Carrito
$(document).ready(function() {
    $("#carrito").hide();
 
$(".addToCart").click(function(){
    $('#carrito').toggle('normal');
 });
  
$(".ocultar").click(function(){
    $("#carrito").hide();
  }) 
});