var results;
var firsttime = true;
var volgende = document.getElementById('Volgende');
var verbeter = document.getElementById('Verbeter');
var antwoord ;

function Zscore() {

  var gemiddelde =  Math.floor(Math.random() * (10 - -10 + 1)) + -10
  for(var i = 0 ; i === 0;){
    var standaardafwijking =  Math.floor(Math.random() * (10 - -10 + 1)) + -10
    i = standaardafwijking
  }
  var x =  Math.floor(Math.random() * (10 - -10 + 1)) + -10

  var vraag = "<h3> bereken de z score van " + x + " . Geg: σ = " + standaardafwijking + " ,  μ = " + gemiddelde
  var vraagloc = document.getElementById('opgave')
  vraagloc.innerHTML = vraag
  antwoord = (x - gemiddelde) / standaardafwijking
  if (antwoord % 1 === 0 || antwoord % 0.1 === 0 ){

    return
  }
  Zscore()
}

// ---------------------------------------------------------------------------- when "volgende" in the html document is clicked this function will start
volgende.onclick = function start(){

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = ""
    Zscore()

}
// ---------------------------------------------------------------------------- when "antwoord" in the html document is clicked this function will start.
verbeter.onclick = function Correct() {

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = "<h3>" + antwoord

}

if (firsttime){


  firsttime = false
   Zscore()



}
