//Este es el modelo del objeto contacto, todo modelo en backbone debe
//seguir esta estructura, el initialize como su nombre lo indica es para, en este caso,
//inicializar el modelo recibiendo los datos que se tienen en el otro archivo main.js al hacer
//click en el boton de add-contact.
//Al final muestra un alert con los datos del modelo ingresados en el archivo main

var Contact = Backbone.Model.extend({
  initialize: function (attr){
  window.trazar("<strong>agregaste el contacto </strong> " + attr.name + " " + attr.email + " " + attr.phone);
  }
});