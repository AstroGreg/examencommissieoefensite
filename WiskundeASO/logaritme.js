var antwoord;
var firsttime = true;
var volgende = document.getElementById('Volgende');
var verbeter = document.getElementById('Verbeter');
var vraagloc = document.getElementById('opgave')
var expbase ;
var exponent ;
var expanswer ;
function logaritme() {


  for(var i = 0 ; i === 0 || i === 1 ;){
    expbase = Math.floor(Math.random() * (10 - 1 + 1)) + 1
    i =   expbase
  }

  for(var i = 0 ; i === 0 || i === 1 ;){
    exponent = Math.floor(Math.random() * (10 - 1 + 1)) + 1
    i = exponent
  }

  expanswer = Math.pow( expbase , exponent)

  if (expanswer < 200){

  var vraag = " <h3> log<sub>" + expbase + "</sub>(" + expanswer + ") = "
  vraagloc.innerHTML = vraag

  return
  }

  logaritme()
}

// ---------------------------------------------------------------------------- when "volgende" in the html document is clicked this function will start

volgende.onclick = function start(){

  vraagloc.innerHTML = ""
  logaritme()

}
// ---------------------------------------------------------------------------- when "antwoord" in the html document is clicked this function will start.
verbeter.onclick = function Correct() {

vraagloc.innerHTML =  " <h3> log<sub>" + expbase + "</sub>(" + expanswer + ") = " + exponent

}

if (firsttime){


  firsttime = false
  logaritme()


}
