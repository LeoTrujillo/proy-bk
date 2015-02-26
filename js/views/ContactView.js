var ContactView = Backbone.View.extend({
  template : _.template($("#contact_template").html()), //defino el template
  initialize: function (){ //inicializo el template
    this.render();
  },
  render : function (eventName){
    $(this.el).append(this.template(this.model.toJSON())); //renderizo el template
    return this;
  }
});