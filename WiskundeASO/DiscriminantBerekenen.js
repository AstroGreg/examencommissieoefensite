 var firsttime = true;
 var volgende = document.getElementById('Volgende');
 var verbeter = document.getElementById('Verbeter')


function Fraction(){}
Fraction.prototype.convert = function(x, improper)
{
    improper = improper || false;
    var abs = Math.abs(x);
    this.sign = x/abs;
    x = abs;
    var stack = 0;
    this.whole = !improper ? Math.floor(x) : 0;
    var fractional = !improper ? x-this.whole : abs;
    /*recursive function that transforms the fraction*/
    function recurs(x){
        stack++;
        var intgr = Math.floor(x); //get the integer part of the number
        var dec = (x - intgr); //get the decimal part of the number
        if(dec < 0.0019 || stack > 20) return [intgr,1]; //return the last integer you divided by
        var num = recurs(1/dec); //call the function again with the inverted decimal part
        return[intgr*num[0]+num[1],num[0]]
    }
    var t = recurs(fractional);
    this.numerator = t[0];
    this.denominator = t[1];
}

Fraction.prototype.toString = function()
{
    var l  = this.sign.toString().length;
    var sign = l === 2 ? '-' : '';
    var whole = this.whole !== 0 ? this.sign*this.whole+' ': sign;
    return whole+this.numerator+'/'+this.denominator;
}

//var frac = new Fraction()
//frac.convert(2.56, false)
//console.log(frac.toString())
//use frac.convert(2.56,true) to get it as an improper fraction


function Discriminant() {

// ---------------------------------------------------------------------------- create random numbers that can't be zero

  for(var i = 0 ; i === 0;){
    var A =    Math.floor(Math.random() * (20 - -10 + 1)) + -10;
    i = A
  }
  for(var i = 0 ; i === 0;){
    var B = Math.floor(Math.random() * (20 - -10 + 1)) + -10;
    i = B
  }
    var C = Math.floor(Math.random() * (20 - -10 + 1)) + -10;
// ---------------------------------------------------------------------------- make sure the + en - are displayed smooth
  var displayA = A;
  var displayB = B;
  var displayC = C;
  if (A == 1){
    displayA = "";

  }

  if (A < 0){
    displayA = "- " + Math.abs(A)
  }
  if (A == -1){
    displayA = "-";

  }
  if (B == 1 ){
    displayB = " + ";
  }
  if (B == -1){
    displayB = " - ";

  }
  if (B > 0){
    displayB = " + " ;
  }
  if (B < 0){
    displayB = " - " + Math.abs(B);
  }

  if (C == 0){
    displayC = " ";
  }
  if (C < 0){
    displayC = " - " + Math.abs(C) ;
  }
  if (C > 0){
    displayC = " + " + Math.abs(C);
  }



// ---------------------------------------------------------------------------- handle the document question area
  var discriminant = (-B)*(-B) - 4*A*C; // calculate the discriminant
  discriminantDisplay =  '<p> De discriminant:  ' + discriminant + '</p>'
  var discriminantloc = document.getElementById('discriminant')
  discriminantloc.innerHTML =  discriminantDisplay

  vraag = "<h3>" + displayA + "x² " + displayB + "x " + displayC; + "</h3>"

  var vraagloc = document.getElementById('vraag')
  vraagloc.innerHTML = vraag
// ---------------------------------------------------------------------------- calculate if the discriminant is 0
  if (discriminant == 0){


   var zero =  ( -B / (2*A)) ;

  if(zero == 0){


     var nulpunten = '<p> Het nulpunt:  ' + 0 + '</p>'
     var nulpuntenloc = document.getElementById('nulpunten')
     nulpuntenloc.innerHTML = nulpunten

       return // acceptable state so brake the loop

   }
  if (zero % 1 == 0) {



    var nulpunten =  '<p> Het nulpunt:  ' + zero + '</p>';
    var nulpuntenloc = document.getElementById('nulpunten')
    nulpuntenloc.innerHTML = nulpunten

      return // acceptable state so brake the loop

     }
  if (zero % 0.1 == 0 ){

    var fraction = new Fraction()
    fraction.convert(zero, true);
    fraction.toString();



    var nulpunten = '<p> Het nulpunt:  ' + fraction + '</p>';
    var nulpuntenloc = document.getElementById('nulpunten')
    nulpuntenloc.innerHTML = nulpunten

      return  // acceptable state so brake the loop

     }
   }

// ---------------------------------------------------------------------------- calculate if the discriminant is bigger than zero
  if (discriminant > 0){

    var zero1 =  ((-B + Math.sqrt(discriminant))/(2*A)) ;
    var zero2 =  ((-B - Math.sqrt(discriminant))/(2*A)) ;


  if (zero1 != 0 && zero2 != 0){
    if (zero1 % 1 === 0 && zero2 % 1 === 0){


      var nulpunten =  "<p> de nulpunten zijn:  " + zero1 + " en " + zero2 + "</p>"
      var nulpuntenloc = document.getElementById('nulpunten')
      nulpuntenloc.innerHTML = nulpunten

      return  // acceptable state so brake the loop

    }

    if (zero1 % 0.1 === 0 || zero2 % 0.1 === 0){
     if (zero1 % 1 === 0){

       var fraction = new Fraction()
       zero2 = fraction.convert(zero2, true);
       zero2 = fraction.toString();



       var nulpunten = "<p> de nulpunten zijn:  " + zero1 + " en " + zero2 + "</p>"
       var nulpuntenloc = document.getElementById('nulpunten')
       nulpuntenloc.innerHTML = nulpunten

       return // acceptable state so brake the loop

     }

     if (zero2 % 1 === 0){

       var fraction = new Fraction()
       zero1 = fraction.convert(zero1, true);
       zero1 = fraction.toString();



       var nulpunten =  "<p> de nulpunten zijn:  " + zero1 + " en " + zero2 + "</p>"
       var nulpuntenloc = document.getElementById('nulpunten')
       nulpuntenloc.innerHTML = nulpunten

       return  // acceptable state so brake the loop

     }}

    if (zero1 % 0.1 == 0 && zero2 % 0.1 == 0 ){

      var fraction1 = new Fraction()
      var fraction2 = new Fraction()
      fraction1.convert(zero1, true);
      fraction2.convert(zero2 , true);
      fraction1.toString()
      fraction2.toString()



    var nulpunten = "<p> de nulpunten zijn:  " + fraction1 + " en " + fraction2  + "</p>"
    var nulpuntenloc = document.getElementById('nulpunten')
    nulpuntenloc.innerHTML = nulpunten

      return // acceptable state so brake the loop



  }
}
}

    Discriminant()  // recursion (if no acceptable state is found)


}


// ---------------------------------------------------------------------------- when "volgende" in the html document is clicked this function will start
volgende.onclick = function start(){

  var discriminantloc = document.getElementById('discriminant')
  var nulpuntenloc = document.getElementById('nulpunten')
  discriminantloc.style.visibility = 'hidden';
  nulpuntenloc.style.visibility = 'hidden                                                                                                                      ';
  Discriminant()

}
// ---------------------------------------------------------------------------- when "antwoord" in the html document is clicked this function will start.
verbeter.onclick = function Correct() {



  var discriminantloc = document.getElementById('discriminant')
  var nulpuntenloc = document.getElementById('nulpunten')
  discriminantloc.style.visibility = 'visible';
  nulpuntenloc.style.visibility = 'visible';

}

if (firsttime){
  firsttime = false;
  var discriminantloc = document.getElementById('discriminant')
  var nulpuntenloc = document.getElementById('nulpunten')
  discriminantloc.style.visibility = 'hidden';
  nulpuntenloc.style.visibility = 'hidden                                                                                                                      ';
  Discriminant()


  }
