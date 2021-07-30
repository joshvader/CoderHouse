$(document).ready(function() {
    $("#caja").hide();

    $("#mostrar").click(function() {
        $(this).hide();
        $("#ocultar").show();
        
        
    });

    $("#ocultar").click(function() {
        $(this).hide();
        $("#mostrar").show();
        $('#caja').fadeOut('normal');
        
    });
    
    
    $("#todoenuno").click(function() {
        $("#caja").toggle('normal');
        $("#caja").animate({height:"280px"},5000);
        $("#caja").animate({height:"200px"},1000).delay(3000).hide('normal');
        

    });

    
   /* $("#todoenuno").click(function() {
        $('#caja').fadeOut('normal');
    });
    */
    
});
