/*
    ENTREGA PROYECTO FINAL PROGRAMACION WEB
    DAVIDE VENIER SEGOVIA Y LEONARDO JIMENEZ IGLESIAS
*/

/*Parte en js en la pagina Art and Technology: que hace que el usario puede ver la altura de la pagina
y donde ha llegado haciendo sroll gracias a una barra puesta al final de esta pagina web.
Esta barra està formada por una barra mas clara que se mueve a la derecha en relacion con el scrool de
la pagina hecho por el usario.
*/
//Declaracion de constante window.onscroll, que recoje la funcion myFuncion
window.onscroll = function() {scrollFunction()};
//Inicializacion de la funcion myFuncion    
function scrollFunction() {
  //definicion de la variable interna winScroll que recoje el alto del body de la pagina web
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  /*variable interna altura que salva el valor de altura que esta formado por la altura del documento menos
  la altura de donde ha llegado el usario en la pagina web.*/
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  /*Variable que almacena el valor de winScroll dividido por toto el alto de la pagina web y por ultimo
  moltiplicado por 100, para restabelecer el valor de llegada del usario en la altura de la pagina.*/
  var scrolled = (winScroll / height) * 100;
  //metodo que nos perimte trabajar en el id myBar y poner un valor en percentual.
  document.getElementById("myBar").style.width = scrolled + "%";
}

//Parte en js en la pagina location: que permite visualizar un mapa de Google maps.
//Variable mapCanvas que define el espacio de visualizacion imagen. 
var mapCanvas = document.getElementById("map");
/*Variable maoOptions que determina la lojitud y la latitud que queremos visualizar.
Ademas, podemos en este campo determinar la catidad de zoom que queremos utilizar.
*/
var mapOptions = {
    //metodo que recoje los valore Lat y Lng
    center: new google.maps.LatLng(51.5, -0.2), zoom: 10
}
//variable map que permite visualizar el mapa de Google maps, igual por formas que por parametros.
var map = new google.maps.Map(mapCanvas, mapOptions);

//Parte en js de la pagina Index: que cambia el texto h1 en otro texto.
//funcion mOver que al pasar sobre este testo lo cambia en otro.
function mOver(obj) {
  //objeto que declara en como cambiar el texto.
  obj.innerHTML = "The new artistic avant-garde"
}
//funcion que al salir del elemento h1 cambia regesa el texto inicial.
function mOut(obj) {
  //objeto que declara en como cambiar el texto.
  obj.innerHTML = "Art and Technology"
}

//Parte en js en la  pagina Index: que cambia el color del h3 de blanco en azul.
/*Inicializacion function mouseover que empieza en el momento en el cual el cursor
del raton pasa por encima del h3 en cuestion*/
function mouseover(){
  //metodo que trabaja en el id "cambioColor" y que cambia el color en azul
  document.getElementById("cambioColor").style.color='#155C6E';
  }
  /*Inicializacion function mouseout que empieza en el momento en el cual
  el cursor del raton se aleja del h3*/
  function mouseout(){
  //metodo que trabaja en el id "cambioColor" y que cambia el color en blanco
  document.getElementById("cambioColor").style.color='whitesmoke';
  }
  
  //Parte de animacion del logotipo que no funciona...
  //Parte js en la pagina Index: que hace mas grande el logotipo en cada pagina web
  //Inicializacion variable global card que declara que va trabajar en la seccion "aside"
  var logo = document.querySelector('aside');
  //metodo que declara como el evento es un dbclick y la funcion de ejecutar es la function(e)
  logo.addEventListener('dblclick', function (e) {
    //metodo toggle en la clase .large que hace el logotipo mas grande al dbclick
    logo.classList.toggle('large');
  });
  
  //Parte js en la pagina Index: que cambia el color del div dos veces.
  //Inicializacion function que recoje un obj
  function mDown1(obj) {
    /*este obj a travez de un metodo coloca un nuevo color de fondo
    al div selectionado en la pagina Index principal*/
    obj.style.backgroundColor = "#D9B8B6";
  }
  //Inicializacion function que recoje un obj
  function mUp1(obj) {
    /*este obj a travez de un metodo coloca un nuevo color de fondo
    al div selectionado en la pagina Index principal*/
    obj.style.backgroundColor="#4F90A1";
  }
  //Inicializacion function que recoje un obj
  function mDown2(obj) {
    /*este obj a travez de un metodo coloca un nuevo color de fondo
    al div selectionado en la pagina Index principal*/
    obj.style.backgroundColor = "#A14F6C";
  }
  //Inicializacion function que recoje un obj
  function mUp2(obj) {
    /*este obj a travez de un metodo coloca un nuevo color de fondo
    al div selectionado en la pagina Index principal*/
    obj.style.backgroundColor="#4F90A1";
  }