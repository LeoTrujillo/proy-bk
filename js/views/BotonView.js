var BotonView = Backbone.View.extend({
  events : {
    "click" : "_click", //podemos definir todos los eventos que queramos en una vista
  },
  initialize : function (){
    this.render() // para inicializer el renderizado del template
  },
  render: function (){
    var el = $(this.el);
    this.collection.each(function (model){
      var template = _.template($("#boton_template").html()); //recupero el html del template
      var html = template(model.toJSON()) //lo paso a una variable en formato json
      el.append(html); // lo inserto en el elemento
    });
  },
  _click : function (e){
    e.preventDefault(); //para que el evento no se propage es bueno al usar vistas
    var _id = $(e.target).data("id");
    var item = this.collection.get(_id);
    if (item != undefined) {
      $("#details").html("");
      var contactView = new ContactView({el:$("#details"), model:item});
    };
  }
});