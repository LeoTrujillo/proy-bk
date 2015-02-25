var contacts; //coleccion de contactos en backbone
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
  
  onChangeContacts(null,null);

  contacts.on({"add":onChangeContacts});
   num_contacts = contacts.length + 1; //para agregar identificadores diferentes a cada contacto

//Para crear un modelo de contacto en backbone
//pasamos los datos al objeto que se creo en otro archivo js con el nombre de dicho objeto
  $("#create-contact").click(function(){
    var contact = new Contact ({
      name:"Jito Mate",
      email: "jitomate@correo.com",
      phone : "1234567890",
      id: num_contacts
    });
    contacts.add(contact); //agregamos el contacto a la coleccion
    window.trazar(JSON.stringify(contact.toJSON()));
    num_contacts ++;
    //contador de contactos
    $(".account").append(contacts.length);
  });

  
});

function onChangeContacts (model,collection){
  //para pintar los contactos que tienen la coleccion
    $("#Contacts").html("<ul></ul>"); 
    contacts.each(pintaContact);
  }

function pintaContact (data){
    //para renderear el contacto que se acaba de agregar creo una variable para almacenar el nodo y en este caso queda
    $div = $("<li>",{id: "ref_contact" + data.cid});
    //en la variable obtengo el nombre del contacto
    $div.html(data.get("name"));
    $div.data("id_contact", data.cid)
    $div.data('name', data.name);
    $("#Contacts ul").append($div);
  }

//esta funcion sirve para agregar el texto en la clase contacts sobre los datos que se agregaron el objeto contacto
//hacemos uso del metoso append de jquery
window.trazar = function (contact){
  $(".contacts").append(contact + "<br>");
};
