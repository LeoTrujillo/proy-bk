//Este es el modelo del objeto contacto, todo modelo en backbone debe
//seguir esta estructura, el initialize como su nombre lo indica es para, en este caso,
//inicializar el modelo recibiendo los datos que se tienen en el otro archivo main.js al hacer
//click en el boton de add-contact.
//Al final muestra un alert con los datos del modelo ingresados en el archivo main

var Contact = Backbone.Model.extend({
  defaults: {  //definimos los valores que tendra por default el modelo
    name: "",
    email:"",
    phone:"",
  },
  initialize: function (attr){
    //evento on de backbone agregamos change con dos puntos para diferenciarlos
    this.on('change:name', this.onChangeName,this);
    this.on('change:email', this.onChangeEmail,this);
    this.on('change:phone', this.onChangePhone,this);
  }
});