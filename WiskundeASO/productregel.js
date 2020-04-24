var results;
var firsttime = true;
var volgende = document.getElementById('Volgende');
var verbeter = document.getElementById('Verbeter');

function Afgeleiden() {

  for(var i = 0 ; i === 0;){
    var constant =    Math.floor(Math.random() * (20 - -10 + 1)) + -10;
    i = constant
  }
  for(var i = 0 ; i === 0;){
    var number =    Math.floor(Math.random() * (20 - -10 + 1)) + -10;
    i = number
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
    var number2 =    Math.floor(Math.random() * (20 - -10 + 1)) + -10;
    i = number2
  }
  for(var i = 0 ; i === 0;){
    var exp2 =    Math.floor(Math.random() * (20 - -10 + 1)) + -10;
    i = exp2
  }
  var A =  Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  if (A == 1){

   calculation = " * "

  }
  if (A == 2){

   calculation = " ÷ "

  }

  var vraag = "<h3>((" + constant + "x" + "<sup>" + exp +"</sup>)" + calculation + "("+ constant2 + "x" + "<sup>" + exp2 + "</sup>) )' </h3>"
  var vraagloc = document.getElementById('opgave');
  vraagloc.innerHTML = vraag
  var a = constant * exp
  var a2 = constant2 * exp2
  var b = "x" + "<sup>"+ (exp - 1) +"</sup>"
  var b2 = "x" + "<sup>"+ (exp2 - 1)+ "</sup>"
  var c = a +
  var c2 = a2 + b2
  results = "<h3> De afgeleiden is  (" + a.toString() +  b.toString()  + ")+(" + a2.toString() +  b2.toString()  + ")</h3>"

  if (exp == 1){
    results = "<h3> De afgeleiden is  " + a.toString() + "</h3>"
  }

if (constant == 1){

    vraag = "<h3>" + "x" + "<sup>" + exp + "</h3>";
    vraagloc = document.getElementById('opgave');
    vraagloc.innerHTML = vraag
    if (exp == 1){
     results = "<h3> De afgeleiden is  " +  b.toString()  + "</h3>"
}
}
  if (constant == -1){

    vraag = "<h3>" + "-x" + "<sup>" + exp + "</h3>";
    vraagloc = document.getElementById('opgave');
    vraagloc.innerHTML = vraag
    if (exp == 1){
     results = "<h3> De afgeleiden is  " + "-"+ b.toString()  + "</h3>"
}
}





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
