
var volgende = document.getElementById('Volgende');
var verbeter = document.getElementById('Verbeter');
var rest = document.getElementById('HornerStappen');
var choiceH = document.getElementById('Horner');
var choiceD = document.getElementById('Discriminant');
var vraagloc1 = document.getElementById('vraag');
var firsttime = true
var current ;


var steps = new Array()

function Horner() {
while(0 === 0){
   var A =  Math.floor(Math.random() * (4 - 3 + 1)) + 4;
   var four = true
   if (A == 3){
      four = false
   }

   var Search = true;



  for(var i = 0 ; i === 0;){
    var B =    Math.floor(Math.random() * (15 - -10 + 1)) + -10;
    i = B
  }
  for(var i = 0 ; i === 0;){
    var C = Math.floor(Math.random() * (15 - -10 + 1)) + -10;
    i = C
  }
  for(var i = 0 ; i === 0;){
    var D = Math.floor(Math.random() * (15 - -10 + 1)) + -10;
    i = D
  }
  for(var i = 0 ; i === 0;){
      var E = Math.floor(Math.random() * (15 - -10 + 1)) + -10;
      i = E
  }
  for(var i = 0 ; i === 0;){
      var F = Math.floor(Math.random() * (15 - -10 + 1)) + -10;
      i = F
  }

  var p2 = document.getElementById('p2')
  p2.innerHTML = B
  var p3 = document.getElementById('p3')
  p3.innerHTML = B
  var p4 = document.getElementById('p4')
  p4.innerHTML = C
  var p6 = document.getElementById('p6')
  p6.innerHTML = D
  var p8 = document.getElementById('p8')
  p8.innerHTML = E
  var p10 = document.getElementById('p10')
  p10.innerHTML = F

    var displayB = B
    var displayC = C
    var displayD = D
    var displayE = E
    var displayF = F

    if (B == -1){
      displayB = " -" ;

    }
    if (B == 1){
      displayB = " " ;

    }

    if (C == -1){
          displayC = " -" ;

        }
    if (C == 1){
          displayC = " ";

        }


    if (four){

    if (C > 0){
      displayC = " + " + C
    }
    if (C < 0){
      displayC = " - " + Math.abs(C)

    }
    if (C == 1){
      displayC = " + "
    }
    if (C == -1){
      displayC = " - "
    }
  }
    if (D > 0){
      displayD = " + " + D
    }
    if (D < 0){
      displayD = " - " + Math.abs(D)
    }
    if (D == 1){
      displayD = " + "
    }
    if (D == -1){
      displayD = " - "
    }
    if (E > 0){
      displayE = " + " + E
    }
    if (E < 0){
      displayE = " - " + Math.abs(E)
    }

    if (E == 1){
      displayE = " + "
    }
    if (E == -1){
      displayE = " - "
    }

    if (F > 0){
      displayF = " + " + F
    }
    if (F < 0){
      displayF = " - " + Math.abs(F)
    }

if (A == 3 ){

    var vraag = "<p> Pas het algoritme van horner toe :"+  displayC + "x<sup>3</sup>  " + displayD + "x<sup>2</sup>  " + displayE + "x " + displayF + "<p>";
 }
 if (A == 4 ){

   var vraag = "<p> Pas het algoritme van horner toe : " + displayB + "x<sup>4</sup> " + displayC  + "x<sup>3</sup> " + displayD + "x<sup>2</sup> " + displayE + "x "+ displayF +"</p>" ;

 }

  var possibleNumbers = new Array
  for (var i = 1 ; i <= Math.abs(F) ; i++){

   if ( F % i == 0){
     possibleNumbers.push(i)
     possibleNumbers.push(-i)
     }
  }

  steps = document.getElementById("MogelijkeDelers");
  steps.innerHTML = "<p> De delers van " + F + " zijn : {" + possibleNumbers + "}</p>"


  var answer = 0
  if (A == 4){

    for (var j = 0 ; j < possibleNumbers.length - 1; j++){

      current = B * possibleNumbers[j]
      current = current + C
      var p5 = document.getElementById('p5')
      p5.innerHTML = current

      current = current * possibleNumbers[j]
      current = current + D
      var p7 = document.getElementById('p7')
      p7.innerHTML = current

      current = current * possibleNumbers[j]
      current = current + E
      var p9 = document.getElementById('p9')
      p9.innerHTML = current
      current = current * possibleNumbers[j];
      current = current + F ;

      var p11 = document.getElementById('p11')
      p11.innerHTML = current


      var p1 = document.getElementById('p1')
      p1.innerHTML = possibleNumbers[j]


      if (current === 0){
        answer = possibleNumbers[j]
      }
   }
}
  if (A == 3){
    for (var j = 1 ; j < possibleNumbers.length; j++){
      current = B * possibleNumbers[j]
      current = current + C
      var p5 = document.getElementById('p5')
      p5.innerHTML = current
      current = current * possibleNumbers[j]
      current = current + D
      var p7 = document.getElementById('p7')
      p7.innerHTML = current
      current = current * possibleNumbers[j]
      current = current + E
      var p9 = document.getElementById('p9')
      p9.innerHTML = current
      current = current * possibleNumbers[j]
      current = current + F
      var p11 = document.getElementById('p11')
      p11.innerHTML = current

      var p1 = document.getElementById('p1')
      p1.innerHTML = possibleNumbers[j]



      if (current === 0){

        answer = possibleNumbers[j]
          }
      }
  }


if (current === 0){

 if (answer != 0) {
  if (answer == 1 || answer == -1 ){
    oddsA -= 1
  if (oddsA = 0 ){
     vraagloc = document.getElementById("vraag");
     vraagloc.innerHTML = vraag ;
       return true
    }
  }
  else {
    vraagloc = document.getElementById("vraag");
    vraagloc.innerHTML = vraag ;
     return true
  }
  if (answer == 2 || answer == -2 ){
    oddsB -= 1
    if (oddsB = 0 ){
      vraagloc = document.getElementById("vraag");
      vraagloc.innerHTML = vraag ;
      return true
    }
  }
}
}


}

}
// ---------------------------------------------------------------------------- when "volgende" in the html document is clicked this function will start
volgende.onclick = function start() {

  noanswer = false
  var founded = document.getElementById('vraag');
  founded.innerHTML = ''
  vraagloc1.style.visibility = 'visible';
  rest.style.visibility = 'hidden';
  changetitle = document.getElementById('exercise')

  try {
    Horner()
  } catch (e) {
    window.location.reload();
  } finally {

  }

}
// ---------------------------------------------------------------------------- when "antwoord" in the html document is clicked this function will start.
verbeter.onclick = function verbeter() {

  if (current != 0){

    Horner()
  }
   rest.style.visibility = 'visible';
   var founded = document.getElementById('solution');

}

if (firsttime){

  noanswer = false
  var founded = document.getElementById('vraag');
  founded.innerHTML = ''
  vraagloc1.style.visibility = 'visible';
  rest.style.visibility = 'hidden';
  changetitle = document.getElementById('exercise')
  Horner();
  firsttime = false
  if (current != 0){

  try {
    Horner()
  } catch (e) {
    window.location.reload();
  } finally {

  }

  }



}
