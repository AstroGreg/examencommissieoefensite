var results;
var firsttime = true;
var volgende = document.getElementById('Volgende');
var verbeter = document.getElementById('Verbeter');

function Afgeleiden() {

//----------------------------------------------------------------------------- create random numbers with can't be zero

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
  //--------------------------------------------------------------------------- put the question in the rigt syntax
  var vraag = "<h3>" + constant + "x" + "<sup>" + exp + "</h3>"
  var vraagloc = document.getElementById('opgave');  // make a variable the represents the location of the question
  vraagloc.innerHTML = vraag // put the question in the html document
  // -------------------------------------------------------------------------- do calculation
  var a = constant * exp
  var b = "x" + "<sup>"+ (exp - 1)
  results = "<h3> De afgeleiden is  " + a.toString() +  b.toString()  + "</h3>"
  if (exp == 1){
    results = "<h3> De afgeleiden is  " + a.toString() + "</h3>" // define the answer when the exp = 1
  }

if (constant == 1){

    vraag = "<h3>" + "x" + "<sup>" + exp + "</h3>";
    vraagloc = document.getElementById('opgave');
    vraagloc.innerHTML = vraag
    if (exp == 1){
     results = "<h3> De afgeleiden is  " +  b.toString()  + "</h3>" // define the constant when the exp = 1
}
}
  if (constant == -1){

    vraag = "<h3>" + "-x" + "<sup>" + exp + "</h3>";
    vraagloc = document.getElementById('opgave');
    vraagloc.innerHTML = vraag
    if (exp == 1){
     results = "<h3> De afgeleiden is  " + "-"+ b.toString()  + "</h3>" // define the answer when the constant = -1
}
}





}
// ---------------------------------------------------------------------------- when "volgende" in the html document is clicked this function will start
volgende.onclick = function start(){

  antwoordloc = document.getElementById('afgeleiden') // find the location of were the answers will be.
  antwoordloc.innerHTML = "" // empty the location of the answers
   Afgeleiden()  // do a new excersie

}
verbeter.onclick = function Correct() {

  antwoordloc = document.getElementById('afgeleiden') //  find the location of were tha answers will be.
  antwoordloc.innerHTML = results // put results in the document.

}

if (firsttime){


  firsttime = false   // Make the first time false so the function doesn't repeat itself.
  Afgeleiden()  // calls the function afgeleiden


}
