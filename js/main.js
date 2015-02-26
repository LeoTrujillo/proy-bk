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
      {
        name:"Mario Bros", 
        email:"mariobros@correo.com", 
        phone:"12334567890", 
        img:"http://i788.photobucket.com/albums/yy164/Rene22283/MarioMug.jpg", 
        id: "1"
      },
      {
        name:"Princesa Durazno", 
        email:"princesadurazno@correo.com", 
        phone:"12334567890", 
        img:"http://lrdmtv.fr/mytweeter/images/avatarpeach.png", 
        id:"2"},
      {
        name:"Toad", 
        email:"toad@correo.com", 
        phone:"12334567890", 
        img:"http://www.herewegomario.com/wp-content/themes/UpstartBloggerMinim/ubminim/images/NSM_toad.jpg", 
        id:"3"}
    ]);
  
  onChangeContacts(null,null);

  contacts.on({"add":onChangeContacts});
   num_contacts = contacts.length + 1; //para agregar identificadores diferentes a cada contacto

   //contador de contactos inicializado
    $(".account").append(contacts.length);
//Para crear un modelo de contacto en backbone
//pasamos los datos al objeto que se creo en otro archivo js con el nombre de dicho objeto
  $("#create-contact").click(function(){
    var contact = new Contact ({
      name:"Jito Mate",
      email: "jitomate@correo.com",
      phone : "1234567890",
      img: "http://www.infojardin.com/foro/image.php?u=144071&dateline=1336926907",
      id: num_contacts
    });
    contacts.add(contact); //agregamos el contacto a la coleccion
    window.trazar(JSON.stringify(contact.toJSON()));
    num_contacts ++;
    //contador de contactos
    $(".account").html("");
    $(".account").append(contacts.length);
  });

  
});

function onChangeContacts (model,collection){
  //para pintar los contactos que tienen la coleccion
    $("#Contacts").html("<ul></ul>"); 
    //contacts.each(pintaContact);
    //Ahora pintamos la lista de contactos pero desde una vista
    var botonView = new BotonView ({el:$("#Contacts ul"), collection: contacts});
  }
/*
function pintaContact (data){
    //para renderear el contacto que se acaba de agregar creo una variable para almacenar el nodo y en este caso queda
    $div = $("<li>",{id: "ref_contact" + data.cid});
    //en la variable obtengo el nombre del contacto
    $div.html(data.get("name"));
    $div.data("id_contact", data.cid)
    $div.data('name', data.name);
    $div.click(function (){
      var contactView = new ContactView({el:$("#details"), model:data});
    });
    $("#Contacts ul").append($div);
  }
*/

//esta funcion sirve para agregar el texto en la clase contacts sobre los datos que se agregaron el objeto contacto
//hacemos uso del metoso append de jquery
window.trazar = function (contact){
  $(".contacts").append(contact + "<br>");
};
