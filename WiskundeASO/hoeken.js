var antwoord;
var firsttime = true;
var volgende = document.getElementById('Volgende');
var verbeter = document.getElementById('Verbeter');
var vraagloc = document.getElementById('opgave')
function hoeken() {


  var Type = Math.floor(Math.random() * (2 - 1 + 1)) + 1

  if (Type === 1){

    var random = Math.floor(Math.random() * (360 - 0 + 1)) + 0
    vraag = "<h3> zet om in radialen : " + random + "°"
    vraagloc.innerHTML = vraag
    antwoord = "<h3> " +  (random / 180).toFixed(2) +  "π"
  }
  if (Type === 2){

    var random = (Math.random() * (0 - 2) + 2).toFixed(2)
    vraag = "<h3> zet om in graden : " + random + "π"
    vraagloc.innerHTML = vraag
    antwoord = "<h3> " + (random * 180) +  "°"
  }

}
// ---------------------------------------------------------------------------- when "volgende" in the html document is clicked this function will start
volgende.onclick = function start(){

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = ""
  hoeken()

}
// ---------------------------------------------------------------------------- when "antwoord" in the html document is clicked this function will start.
verbeter.onclick = function Correct() {

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = antwoord

}

if (firsttime){


  firsttime = false
  hoeken()


}
