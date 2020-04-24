var firsttime = true;
var volgende = document.getElementById('Volgende');
var verbeter = document.getElementById('Verbeter');
var antwoord;

function raaklijn() {

  var A = Math.floor(Math.random() * (5 - -5 + 1)) + -5
  var B = Math.floor(Math.random() * (5 - -5 + 1)) + -5
  for (var i = 0;  i == 0;){
       var B = Math.floor(Math.random() * (5 - -5 + 1)) + -5
       i = B
  }

  var C = (A*A*A) + (B) * (A)

  var vraag = "gegeven de fucntie y = x<sup>3 </sup> + " + B + "x <br> wat is de formule van de raaklijn op (" + A + "," + C + ")"
  var vraagloc = document.getElementById('opgave')
  vraagloc.innerHTML = vraag
  var afgeleiden = "y = 3x<sup>2 </sup> + " + B
  var m = 3 * Math.pow(A , 2) + B
  var formula = "y  -" + B + " = " + m + " + ( x - " + A + ")"
  var calc1 = "y  -" + B + " = " + m + "x - " + (A * m)
  var calc2 = " y = " +  m + "x + (" + ((m * A)+ -C)+ ") "

  antwoord = "<p> de afgeleiden van de functie is :   " + afgeleiden + " <br> dus de raaklijn is " + calc2 + "<br>(formule van de raaklijn y - y<sub>1 </sub>  =  m (x - x<sub>1 </sub> )) </p> "

  if (m < 20){

    return
  }
  raaklijn()







}

// ---------------------------------------------------------------------------- when "volgende" in the html document is clicked this function will start
volgende.onclick = function start(){

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = ""
  raaklijn()

}
// ---------------------------------------------------------------------------- when "antwoord" in the html document is clicked this function will start.
verbeter.onclick = function Correct() {

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = antwoord

}

if (firsttime){


  firsttime = false
  raaklijn()


}
