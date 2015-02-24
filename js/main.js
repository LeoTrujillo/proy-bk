var contacts; //collecion de contactos en backbone
var num_contacts; //contador de contactos



$(document).ready(function(){
  var txt = $(".texto");
  txt.hide();
  $('.boton').click(function(){
    txt.toggle();
    $(".boton").hide();
  });
  $(".btn-close").click(function(){
    txt.toggle();
    $(".boton").show();
  });
    
  var ContactsCollection = Backbone.Collection.extend({
       model:Contact
   });

  contacts = new ContactsCollection([
      {name:"Leonardo Trujillo", email:"leonardotrujillo@correo.com", phone:"12334567890", id: "1"},
      {name:"Concha Queta", email:"conchaqueta@correo.com", phone:"12334567890", id:"2"},
      {name:"Hipo Potamo", email:"hipopotamo@correo.com", phone:"12334567890", id:"3"}
    ]);
  
  contacts.on({"add":onChangeContacts});
    

//Para crear un modelo de contacto en backbone
//pasamos los datos al objeto que se creo en otro archivo js con el nombre de dicho objeto
  $(".add-contact").click(function(){
    var contact = new Contact ({
      name:"Leonardo",
      email: "leonardotrujillor@correo.com",
      phone : "1234567890"
    });
    window.trazar(JSON.stringify(contact.toJSON()));
  });

});

function onChangeContacts (model,collection){
    $("#Contacts").html("<ul></ul>");
    contacts.each(pintaContact);
  }

function pintaContact (data){
    //para renderear el contacto que se acaba de agregar creo una variable para almacenar el nodo y en este caso queda
    $div = $("<li>",{name: "name" + data.name});
    //en la variable obtengo el nombre del contacto
    $div.html(data.get("name") + " " + data.name);
    $div.data('name', data.name);
    $("#Contacts ul").append($div);
  }

//esta funcion sirve para agregar el texto en la clase contacts sobre los datos que se agregaron el objeto contacto
//hacemos uso del metoso append de jquery
window.trazar = function (contact){
  $(".contacts").append(contact + "<br>");
};
