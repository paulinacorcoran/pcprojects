$(document).ready( function(){


  $("#WhyDR").click( function(){
    $(".intro h1").html("¡Bienvenidos a la República Dominicana!");
    $(".intro h1").toggle();
    $(".intro h1").css("color", "red");
  });


  $("#Travel").click( function(){
    $(".gridContent div:first-child p").show();
    $(".gridContent div:nth-child(2) p").hide();
    $(".gridContent div:nth-child(3) p").hide();
    $(".gridContent div:nth-child(4) p").hide();
  });

  $("#Weather").click( function(){
    $(".gridContent div:first-child p").hide();
    $(".gridContent div:nth-child(2) p").show();
    $(".gridContent div:nth-child(3) p").hide();
    $(".gridContent div:nth-child(4) p").hide();
  });

  $("#Hotels").click( function() {
    $(".gridContent div:first-child p").hide();
    $(".gridContent div:nth-child(2) p").hide();
    $(".gridContent div:nth-child(3) p").show();
    $(".gridContent div:nth-child(4) p").hide();
  });

  $("#Food").click( function(){
    $(".gridContent div:first-child p").hide();
    $(".gridContent div:nth-child(2) p").hide();
    $(".gridContent div:nth-child(3) p").hide();
    $(".gridContent div:nth-child(4) p").show();
  });



});
