var rico ;
var firsttime = true;
var volgende = document.getElementById('Volgende');
var verbeter = document.getElementById('Verbeter');

function Richtingscoëfficiënt() {

   var Ax = Math.floor(Math.random() * (20 - -10 + 1)) + -10
   var Ay = Math.floor(Math.random() * (20 - -10 + 1)) + -10
   var Bx = Math.floor(Math.random() * (20 - -10 + 1)) + -10
   var By = Math.floor(Math.random() * (20 - -10 + 1)) + -10


   vraag = "<p> Wat is de rico van de fucntie die eerst door het punt (" + Ax +" , " + Ay + ") gaat en vervolgens door het punt (" + Bx +" , " + By + ") gaat </p>"
   vraagloc = document.getElementById('opgave')
   vraagloc.innerHTML = vraag

   rico = (By - Ay) / (Bx - Ax);

   if (rico % 1 == 0){

     return
   }
   Richtingscoëfficiënt()


}

// ---------------------------------------------------------------------------- when "volgende" in the html document is clicked this function will start
volgende.onclick = function start(){

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = ""
  Richtingscoëfficiënt()

}
// ---------------------------------------------------------------------------- when "antwoord" in the html document is clicked this function will start.
verbeter.onclick = function Correct() {

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = "<p> de rico van de functie is : " + rico

}

if (firsttime){


  firsttime = false
  Richtingscoëfficiënt()


}
