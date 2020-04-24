var antwoord;
var firsttime = true;
var volgende = document.getElementById('Volgende');
var verbeter = document.getElementById('Verbeter');
var vraagloc = document.getElementById('opgave')

function standaardafwijking() {

  var number1 =  Math.floor(Math.random() * (10 - -10 + 1)) + -10
  var number2 =  Math.floor(Math.random() * (10 - -10 + 1)) + -10
  var number3 =  Math.floor(Math.random() * (10 - -10 + 1)) + -10
  var number4 =  Math.floor(Math.random() * (10 - -10 + 1)) + -10
  var number5 =  Math.floor(Math.random() * (10 - -10 + 1)) + -10
  var type =  Math.floor(Math.random() * (2 - 1 + 1)) + 1

if (type === 1){
  var vraag = "<h3> bepaal de Standaardafwijking van {" + number1 + " , " + number2 + " , " + number3 + " , " +  number4 + " , " + number5 + "}"
  vraagloc.innerHTML = vraag
  var gemiddelde = (number1 + number2 + number3 + number4 + number5)/ 5
  var standaardafwijking = Math.sqrt ((Math.pow((number1 - gemiddelde),2) + Math.pow((number2 - gemiddelde),2) + Math.pow((number3 - gemiddelde),2) + Math.pow((number4 - gemiddelde),2) + Math.pow((number5 - gemiddelde),2))/ 4).toFixed(2)
  antwoord = "<h3>" + standaardafwijking
  return


}
if (type === 2){
  var vraag = "<h3> bepaal de Standaardafwijking van {" + number1 + " , " + number2 + " , " + number3 +  "}"
  vraagloc.innerHTML = vraag
  var gemiddelde = (number1 + number2 + number3)/ 3
  var standaardafwijking = Math.sqrt ((Math.pow((number1 - gemiddelde),2) + Math.pow((number2 - gemiddelde),2) + Math.pow((number3 - gemiddelde),2))/ 2).toFixed(2)
  antwoord = "<h3>" + standaardafwijking
  return


}
}

// ---------------------------------------------------------------------------- when "volgende" in the html document is clicked this function will start
volgende.onclick = function start(){

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = ""
   standaardafwijking()
}
// ---------------------------------------------------------------------------- when "antwoord" in the html document is clicked this function will start.
verbeter.onclick = function Correct() {

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = antwoord

}

if (firsttime){


  firsttime = false

  standaardafwijking()

}
