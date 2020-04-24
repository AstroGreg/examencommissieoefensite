var antwoord;
var firsttime = true;
var volgende = document.getElementById('Volgende');
var verbeter = document.getElementById('Verbeter');

function Groeifactor() {


  for(var i = 0 ; i === 0;){
    var Bedrag1 = Math.floor(Math.random() * (300 - 100 + 1)) + 100
    i = Bedrag1
  }
  for(var i = 0 ; i === 0;){
    var Bedrag2 = Math.floor(Math.random() * (300 - 100 + 1)) + 100
    i = Bedrag2
  }
  for(var i = 0 ; i === 0 ;){
    var tijdsperiode =  Math.floor(Math.random() * (10 - 2 + 1)) + 2
    i = tijdsperiode
  }



  var vraag = "<p> 1) Ik verdien momenteel €" + Bedrag1 + " ik word beloont elk jaar en krijg na 1 jaar " + Bedrag2 + "% meer.  wat is de groeifactor ? </p> "

  var groeifactor = Bedrag2 / 100
  var vraag2 = "<p> 2) hoeveel euro verdien ik na "  + tijdsperiode + " jaar ?"
  var vraagloc = document.getElementById('opgave')
  vraagloc.innerHTML = vraag + vraag2
  var bedrag = Bedrag1 * Math.pow(groeifactor , tijdsperiode)
  antwoord = "<p> de groeifactor is " + ((Bedrag2 / 100)) + "<b> <br> na " + tijdsperiode + " jaar verdien €" + bedrag

  if ( (Bedrag2 / 100) % 0.01 > 0 ){

    return
  }

  Groeifactor()

}

// ---------------------------------------------------------------------------- when "volgende" in the html document is clicked this function will start
volgende.onclick = function start(){

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = ""
  Groeifactor()

}
// ---------------------------------------------------------------------------- when "antwoord" in the html document is clicked this function will start.
verbeter.onclick = function Correct() {

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = antwoord

}

if (firsttime){


  firsttime = false
  Groeifactor()


}
