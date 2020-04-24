var results;
var firsttime = true;
var volgende = document.getElementById('Volgende');
var verbeter = document.getElementById('Verbeter');

function Afgeleiden() {
//----------------------------------------------------------------------------- create random numbers that can't be zero.

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
    var funexp =    Math.floor(Math.random() * (20 - -10 + 1)) + -10;
    i = funexp
  }

//-----------------------------------------------------------------------------  calculation
  var initial1 = constant + "x" + "<sup>" + exp + "</sup>)" // put the unchanged part of the website in the rifght syntax.
  var vraag = "<h3>(" + constant + "x" + "<sup>" + exp + "</sup> + " + constant2 + ")<sup>" + funexp + "</sup> </h3>" // puts the question in the right syntax.
  var vraagloc = document.getElementById('opgave');
  vraagloc.innerHTML = vraag ;
  var a = constant * exp ;
  var b = "x" + "<sup>"+ (exp - 1) +"</sup>"
  results = "<h3> " + funexp + " * (" + constant + "x" + "<sup>" + exp + "</sup> + " + constant2 + ")<sup>" + (funexp-1) + "</sup>  *  (" + a + b + ")</h3> <br> <p> Dit is niet de oplosing. Dit staat enkel in de juiste vorm. Je zal met de regels van de machten zelf de echte oplossing moeten vinden of het typen op een andere site of app. In de toekomst zal ik dit wel automatische gebeuren.  Als je zelf op deze vorm kan komen denk ik dat je het begrijpt. De rest is bandwerk maar vraagt ook oefening."

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
