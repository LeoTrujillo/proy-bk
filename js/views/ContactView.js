var ContactView = Backbone.View.extend({
  template : _.template($("#identificador").html()),
  initialize: function (){
    this.render();
  },
  render : function (eventName){
    $(this.el).append("");
  }
});