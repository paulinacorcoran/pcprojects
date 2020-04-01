$(document).ready( function(){


$("#Intro").click(function(){
  $(".gridContent div:first-child p").hide();
});

$("#Travel").click(function(){
  $(".gridContent div:first-child p").show();
});

$("#Weather").click( function(){
  $(".gridContent div:nth-child(2) p").toggle();
});

$("#Hotels").click(function() {
  $(".gridContent div:nth-child(3) p").html("Hello <b>World</b>!");
});

$("#Activities").click(function(){
  $(".box").css("background-color", "lightblue");
});


$("footer").mouseover(function(){
    $("footer p").html("Yeah! You're over me");
});

$("footer").mouseleave(function() {
  $("footer p").html("Comeback...=(");
});

});
