Agenda.Views.Contact = Backbone.View.extend({
  tagName : "li",
  className : "list-group-item",

  events : {
    "click .user" : "showContact"
  },

  template : Handlebars.compile($("#boton_template").html()),

  initialize : function (){
    this.listenTo(this.model, "change", this.render, this);
  },
  render : function (){
    var contact = this.model.toJSON();
    var html = this.template(contact);
    this.$el.html(html);
    return this;
  },
  showContact : function (){
    Agenda.app.list.model.set(this.model.toJSON());
    return false;
  }
});