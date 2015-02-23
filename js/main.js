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

//Para crear un modelo de contacto en backbone
//pasamos los datos al objeto que se creo en otro archivo js con el nombre de dicho objeto
  $(".add-contact").click(function(){
    var contact = new Contact ({
      name:"Leonardo",
      email: "leonardotrujillor@correo.com",
      phone : "1234567890"
    });
    window.trazar(JSON.stringify(contact.toJSON()));
  });


//esta funcion sirve para agregar el texto en la clase contacts sobre los datos que se agregaron el objeto contacto
//hacemos uso del metoso append de jquery
window.trazar = function (contact){
  $(".contacts").append(contact + "<br>");
};

});