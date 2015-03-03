Agenda.Views.Detail = Backbone.View.extend({
  el : $("#details"),
  template : Handlebars.compile($("#contact_template").html()),
  initialize : function (){
    this.listenTo(this.model, "change", this.render);
  },
  render : function (){
    var contact = this.model.toJSON();
    this.$el.append(this.template(contact));
  }
});