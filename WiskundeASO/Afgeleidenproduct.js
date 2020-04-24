var results;
var firsttime = true;
var volgende = document.getElementById('Volgende');
var verbeter = document.getElementById('Verbeter');

function Afgeleiden() {


// ----------------------------------------------------------------------------- create random number that can"t be zero
  for(var i = 0 ; i === 0;){
    var constant =    Math.floor(Math.random() * (20 - -10 + 1)) + -10;
    i = constant
  }

  for(var i = 0 ; i === 0;){
    var exp =    Math.floor(Math.random() * (20 - -10 + 1)) + -10;
    i = exp
  }
  for(var i = 0 ; i === 0;){
    var constant2 =    Math.floor(Math.random() * (20 - -10 + 1)) + -10;
    i = constant2
  }
  for(var i = 0 ; i === 0;){
    var exp2 =    Math.floor(Math.random() * (20 - -10 + 1)) + -10;
    i = exp2
  }
// ---------------------------------------------------------------------------- calculate and put it in the html document
  var initial1 = constant + "x" + "<sup>" + exp + "</sup>)"
  var initial2 =  constant2 + "x" + "<sup>" + exp2 + "</sup>"
  var vraag = "<h3>((" + constant + "x" + "<sup>" + exp +"</sup>)" + "*" + "("+ constant2 + "x" + "<sup>" + exp2 + "</sup>) )' </h3>"
  var vraagloc = document.getElementById('opgave');
  vraagloc.innerHTML = vraag
  var a = constant * exp
  var a2 = constant2 * exp2
  var b = "x" + "<sup>"+ (exp - 1) +"</sup>"
  var b2 = "x" + "<sup>"+ (exp2 - 1)+ "</sup>"
  results = "<p>(" + a.toString() +  b.toString() + " * " + initial2 + ") + (" + a2.toString() +  b2.toString() + " * " + initial1 + ")</h3>  <br> <p> Dit is niet de oplosing. Dit staat enkel in de juiste vorm. Je zal met de regels van de machten zelf de echte oplossing moeten vinden of het typen op een andere site of app. In de toekomst zal ik dit wel automatische gebeuren. Als je zelf op deze vorm kan komen denk ik dat je het begrijpt. De rest is bandwerk maar vraagt ook oefening."








}
// ---------------------------------------------------------------------------- when "volgende" in the html document is clicked this function will start
volgende.onclick = function start(){

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = ""
   Afgeleiden()

}
// ---------------------------------------------------------------------------- when "antwoord" in the html document is clicked this function will start.
verbeter.onclick = function Correct() {

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = results

}

if (firsttime){


  firsttime = false
  Afgeleiden()


}
