Agenda.Views.List = Backbone.View.extend({
  el : $(".Contacts > .list"),

  initialize : function (){
    this.listenTo(this.collection, "add", this.addOne, this);
    this.listenTo(this.collection, "reset", this.render, this);
  },

  render : function (){
    this.$el.empty();
    this.addAll();
  },

  addOnne : function (contact){
    var contactView = new Agenda.Views.Contact({model : contact});
    this.$el.append(contactView.render().el);
  },

  addAll : function (){
    this.collection.forEach(this.addOne, this);
  }

});