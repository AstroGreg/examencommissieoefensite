var antwoord;
var firsttime = true;
var volgende = document.getElementById('Volgende');
var verbeter = document.getElementById('Verbeter');
var vraagloc = document.getElementById('opgave')
var expbase ;
var exponent ;
var expanswer ;


function exponentiëlevergelijkingen() {


// ---------------------------------------------------------------------------- create random  numbers that can't be zero

    for(var i = 0 ; i === 0;){
      var constant =  Math.floor(Math.random() * (20 - -10 + 1)) + -10
      i = constant
    }

    for(var i = 0 ; i === 0;){
      var base  =  Math.floor(Math.random() * (20 - -10 + 1)) + -10
      i = base
    }

    for(var i = 0 ; i === 0;){
      var rightside = Math.floor(Math.random() * (100 - -100 + 1)) + -100
      i = rightside
    }
    var type =  Math.floor(Math.random() * (3 - 1 + 1)) + 1     // will defiune the type of exercise you will get



// ---------------------------------------------------------------------------- calculate
    if (type === 1){

      vraag = "<h3>" + constant + " + "+ base + "<sup>x</sup> = " + rightside
      vraagloc.innerHTML = vraag
      antwoord = "<h3>" + base + "<sup>x</sup> = " + (rightside - constant) + " </h3> <h3> " + "x" + " = ln(" + (rightside-constant) + ")/ln(" + base + ")<h3>"

      if ((rightside - constant) > 0 && base > 0){
        return  // acceptable state so brake the loop.
    }}
    if (type === 2){

      vraag = "<h3>" + base + "<sup>x</sup> = " + rightside
      vraagloc.innerHTML = vraag
      antwoord = "<h3> " + "x" + " = ln(" + rightside + ")/ln(" + base + ") </h3>"

      if ( rightside > 0 && base > 0){
        return  // acceptable state so brake the loop.
    }}
    if (type === 3){

      vraag = "<h3>" + base + "<sup>x + (" + constant + ")</sup> = " + rightside
      vraagloc.innerHTML = vraag
      antwoord = "<h3> " + "x + (" + constant + ") = ln(" + rightside + ")</h3>" + "<h3> " + "x + (" + constant + ") = " + -1 * constant + " + ln(" + rightside + ")/ln(" + base + ")   </h3>"
      if ( rightside > 0 && base > 0){
        return  // acceptable state so brake the loop.
    }}
  exponentiëlevergelijkingen() // recursion (no acceptable state is found)
}
// ---------------------------------------------------------------------------- when "volgende" in the html document is clicked this function will start
volgende.onclick = function start(){

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = ""
  exponentiëlevergelijkingen()

}
// ---------------------------------------------------------------------------- when "antwoord" in the html document is clicked this function will start.
verbeter.onclick = function Correct() {

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = antwoord

}

if (firsttime){


  firsttime = false
  exponentiëlevergelijkingen()


}
