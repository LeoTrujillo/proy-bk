var Router = Backbone.Router.extend({
  routes : {
    "": "index", //cargando el index de la aplicaci´on
    "help" : "help", //#help ruta de ayuda
    "about" : "about", //#about sobre el proyecto
    "contact/:id" : "ShowContact" // Muestra la ruta el detalle del contacto especifico de su id
  },
  index: function (){
    console.log("Bienvenido al inicio del proyecto de backbone")
  },
  help : function (){
    console.log("Esta es la seccion de help");
  },
  about: function (){
    console.log("Seccion de about");
  },
  ShowContact : function(id){
    var item = contacts.collecction.get(id); //obtenemos el id del contacto
    if(item != undefined){
      $("#details").html("");
      var contactView = new ContactView({el:$("#details"), model:item});
    }
  }
});