var antwoord;
var firsttime = true;
var volgende = document.getElementById('Volgende');
var verbeter = document.getElementById('Verbeter');
var vraagloc = document.getElementById('opgave')
var a;
var check;

function sinusvergelijking() {

    a = Math.floor(Math.random() * (10 - 2 + 1)) + 2
    var b = Math.floor(Math.random() * (10 - 2 + 1)) + 2
    var c = Math.floor(Math.random() * (10 - -10 + 1)) + -10
    var d = Math.floor(Math.random() * (10 - 1 + 1)) + 1
    var k = Math.floor(Math.random() * (10 - 1 + 1)) + 1

    var vraag = "<h3>" + a + " * sin(" + b + "x + " + c + " ) + " + d + " = " + k
    vraagloc.innerHTML = vraag
    var a1 = "<h3>" + a + " * sin(" + b + "x  + " + c + " ) = " + (k - d)
    var temp = (k - d) / a
    if( Math.abs(temp) < 1 ){

    check = a
    var a2 = "<h3> sin(" + b + "x + " + c + " ) = " + temp.toFixed(2)
    var temp2 = Math.asin(temp)
    var a3 = "<h3>" + b + "x + " + c +  " = " + temp2.toFixed(2)
    temp3 = (-c) + temp2
    var a4 = "<h3>" + b + "x = " + temp3.toFixed(2)
    antwoord = a1
    if (temp2 >= 0){

    var a5 = "<h3>" + b + "x + " + c +  " = " +  " π - " +  temp2.toFixed(2)
    temp4 = (-c) + (Math.PI - temp2)
    }

    else {
      var a5 = "<h3>" + b + "x + " + c +  " = " +  " 2π + " +  Math.abs(temp2.toFixed(2)) + " + π."
      temp4 = (-c) + ((3*Math.PI) + Math.abs(temp2))
    }


    var a6 = "<h3>" + b + "x = " + temp4.toFixed(2)

    if (Math.abs(b)  %  2 === 0){

      var periode = "k * π/"+ (Math.abs(b) / 2)
    }
    else {
      var periode = "k * 2π/"+ (Math.abs(b))
    }

    antwoord = a1 + a2 + a3 + a4 + "<h3> x = " + (temp3 / b).toFixed(2) + "<br>" +  a2 + a5 + a6 + "<h3> x = " + (temp4 / b).toFixed(2) + " <br> <h3> Antwoord = " + (temp3 / b).toFixed(2) + " + " + periode + " en " + (temp4 / b).toFixed(2) + " + " + periode

      if( temp3 > 0){

         return
      }



  }

   sinusvergelijking()

}
// ---------------------------------------------------------------------------- when "volgende" in the html document is clicked this function will start
volgende.onclick = function start(){

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = ""

  sinusvergelijking()
  window.location.reload();


}
// ---------------------------------------------------------------------------- when "antwoord" in the html document is clicked this function will start.
verbeter.onclick = function Correct() {

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = antwoord

}

if (firsttime){


  firsttime = false
  sinusvergelijking()
}
