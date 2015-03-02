Agenda.Router = Backbone.Router.extend({
  routes : {
    "": "index", //cargando el index de la aplicaci´on
    //"help" : "help", //#help ruta de ayuda
    //"about" : "about", //#about sobre el proyecto
    //"contact/:id" : "ShowContact" // Muestra la ruta el detalle del contacto especifico de su id
  },

  initialize : function (){
    this.current ={}; //devuelve los elementos de un array
    this.jsonData = {};
    this.contacts = new Agenda.Collections.Contacts();
    this.contactslist = new Agenda.Views.List({collection : this.contacts});
    this.contactdetail = new Agenda.Views.Detail({model : new Agenda.Models.Contact()});

    Backbone.history.start();
  },

  index: function (){
    this.fetchData();
  },
  fetchData : function (){
    var self = this;

    return $.getJSON('data.json').then(function (data){
      self.jsonData = data;
      for (var name in data) {
        if (data.hasOwnProperty(name)) {
          self.addContact(name, data[name]);
        };
      };
    });
  },
  addContact : function (name) {
    this.contacts.add(new Agenda.Models.Contact({
      name : name,
      email : email,
      phone : phone
    }));
  },
  ShowContact : function(id){
    var item = contacts.collecction.get(id); //obtenemos el id del contacto
    if(item != undefined){
      $("#details").html("");
      var contactView = new ContactView({el:$("#details"), model:item});
    }
  }
});