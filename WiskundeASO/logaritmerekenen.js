var antwoord;
var firsttime = true;
var volgende = document.getElementById('Volgende');
var verbeter = document.getElementById('Verbeter');
var vraagloc = document.getElementById('opgave')
var expbase ;
var exponent ;
var expanswer ;
var type;
function logaritme() {


  for(var i = 0 ; i === 0 || i === 1 ;){
    expbase = Math.floor(Math.random() * (10 - 2 + 1)) + 1
    i =   expbase
  }

  for(var i = 0 ; i === 0 || i === 1 ;){
    exponent = Math.floor(Math.random() * (10 - 1 + 1)) + 1
    i = exponent
  }
  for(var i = 0 ; i === 0 || i === 1 ;){
    exponent2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1
    i = exponent2
  }
  type = Math.floor(Math.random() * (4 - 1 + 1)) + 1
  expanswer = Math.pow(expbase , exponent)
  expanswer2 = Math.pow(expbase , exponent2)

  if (expanswer < 200 && expanswer2 < 200){
  if (expanswer % 1 === 0 || expanswer2 % 1 === 0 ||  expbase % 1 === 0 || exponent % 1 === 0 || exponent2 % 1 === 0 ){
  if (type === 1){
    var vraag = "<h3> log<sub>" + expbase + "</sub>(" + expanswer + ") + log<sub>" + expbase + "</sub>(" + expanswer2 + ") = "
    vraagloc.innerHTML = vraag
    antwoord = "<h3> log<sub>" + expbase + "</sub>(" + expanswer + ") + log<sub>" + expbase + "</sub>(" + expanswer2 + ") =  log<sub>" + expbase + "</sub>(" + (expanswer * expanswer2) + ") = " + (exponent + exponent2)
    return
  }
  if (type === 2){
    var vraag = "<h3> log<sub>" + expbase + "</sub>(" + expanswer + ") - log<sub>" + expbase + "</sub>(" + expanswer2 + ") = "
      vraagloc.innerHTML = vraag
    antwoord = "<h3> log<sub>" + expbase + "</sub>(" + expanswer + ") - log<sub>" + expbase + "</sub>(" + expanswer2 + ") = log<sub>" + expbase + "</sub>(" + (expanswer / expanswer2) + ") = " + (exponent - exponent2)
    return
  }

  if (type === 3){
    var random = Math.floor(Math.random() * (4 - 1 + 1)) + 1
    var vraag = "<h3>" + random  + " * log<sub>" + expbase + "</sub>(" + expanswer + ") = "
    vraagloc.innerHTML = vraag
    antwoord = "<h3>" + random  + " * log<sub>" + expbase + "</sub>(" + expanswer + ") = log<sub>" + expbase + "</sub>(" + expanswer + "<sup>" + random  + "</sup>) = " + ( exponent * random )
    return
  }

  if (type === 4){

    var vraag = "<h3> log<sub>" + "1/" + expbase + "</sub>(" + expanswer + ") = "
    vraagloc.innerHTML = vraag
    antwoord = "<h3> log<sub>" + "1/" + expbase + "</sub>(" + expanswer + ") = - log<sub>" + expbase + "</sub>(" + expanswer + ") = -" + exponent
    return

  }}}

  logaritme()

}

// ---------------------------------------------------------------------------- when "volgende" in the html document is clicked this function will start
volgende.onclick = function start(){

  vraagloc.innerHTML = ""
  logaritme()

}
// ---------------------------------------------------------------------------- when "antwoord" in the html document is clicked this function will start.
verbeter.onclick = function Correct() {

vraagloc.innerHTML =  antwoord

}

if (firsttime){


  firsttime = false
  logaritme()


}
