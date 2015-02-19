$(document).ready(function(){
  var txt = $(".texto");
  txt.hide();
  $('.boton').click(function(){
    txt.toggle();
    $(".boton").hide();
  });
  $(".btn-close").click(function(){
    txt.toggle();
    $(".boton").show();
  });
});