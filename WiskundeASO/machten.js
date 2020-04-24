var antwoord;
var firsttime = true;
var volgende = document.getElementById('Volgende');
var verbeter = document.getElementById('Verbeter');
var onerotwo = 10

function machten() {


  for(var i = 0 ; i === 0;){
    var constant =    Math.floor(Math.random() * (10 - -10 + 1)) + -10;
    i = constant
  }
  for(var i = 0 ; i === 0;){
    var constant2 =    Math.floor(Math.random() * (10 - -10 + 1)) + -10;
    i = constant2
  }
  for(var i = 0 ; i === 0;){
    var exponent =    Math.floor(Math.random() * (10 - -10 + 1)) + -10;
    i = exponent
  }
  for(var i = 0 ; i === 0;){
    var exponent2 =    Math.floor(Math.random() * (10 - -10 + 1)) + -10;
    i = exponent2
  }

   var type = Math.floor((Math.random() * 6) + 1);

   if (type === 1){
      if (Math.pow(constant , exponent ) + Math.pow(constant , exponent2) % 1 === 0 &&  Math.abs((Math.pow(constant , exponent ) + Math.pow(constant , exponent2) % 1 === 0)) <= 100){

      var vraag = "<h3> " + constant + "<sup>" + exponent + "</sup> + " + constant + "<sup>" + exponent2 + "</sup> = ?"
      var vraagloc = document.getElementById('opgave')
      vraagloc.innerHTML = vraag

      antwoord = "<h3>  = " + (Math.pow(constant , exponent ) + Math.pow(constant , exponent2))
      onerotwo = 5
      return
   }}
   if (type === 2){
      if (Math.pow(constant , exponent ) - Math.pow(constant , exponent2) % 1 === 0 && Math.abs((Math.pow(constant , exponent ) - Math.pow(constant , exponent2))) <= 100){
      var vraag = "<h3> " + constant + "<sup>" + exponent + "</sup> - " + constant + "<sup>" + exponent2 + "</sup> = ?"
      var vraagloc = document.getElementById('opgave')
      vraagloc.innerHTML = vraag

      antwoord = "<h3> =  " + (Math.pow(constant , exponent ) - Math.pow(constant , exponent2))
      onerotwo = 5
      return
   }}
   if (!(onerotwo === 0)) {
   if (Math.abs(constant) === 0 || Math.abs(constant) === 1 || Math.abs(constant) === 2 || Math.abs(constant2) === 0 || Math.abs(constant2) === 1 || Math.abs(constant2) === 2 || Math.abs(exponent) === 0 || Math.abs(exponent) === 1 || Math.abs(exponent) === 2 || Math.abs(exponent2) === 0 || Math.abs(exponent2) === 1 || Math.abs(exponent2) === 2 || Math.abs((exponent - exponent2)) === 0 || Math.abs((exponent - exponent2)) === 1 || Math.abs((exponent - exponent2)) === 2 || Math.abs((exponent + exponent2)) === 0 || Math.abs((exponent + exponent2)) === 1 || Math.abs((exponent + exponent2)) === 2 ){

       onerotwo -= 1
       machten()

   }
 }
   if (type === 3){
     if (Math.pow( constant , exponent - exponent2) % 1 === 0 && Math.abs(Math.pow( constant , exponent - exponent2)) <= 100 ){
      var vraag = "<h3> " + constant + "<sup>" + exponent + "</sup>  ÷ " + constant + "<sup>" + exponent2 + "</sup> = ?"
      var vraagloc = document.getElementById('opgave')
      vraagloc.innerHTML = vraag

      antwoord =  "<h3>(" + constant + "<sup>" + (exponent - exponent2) + "</sup>) = "  + Math.pow( constant , exponent - exponent2)  + "</h3>"
     onerotwo = 5
     return
   }}
   if (type === 4){
      if (Math.pow(constant , exponent + exponent2) % 1 === 0 && Math.abs(Math.pow(constant , exponent + exponent2)) <= 100){
      var vraag = "<h3>(" + constant + "<sup>" + exponent + "</sup>) * (" + constant + "<sup>" + exponent2 + "</sup>) = ?"
      var vraagloc = document.getElementById('opgave')
      vraagloc.innerHTML = vraag

      antwoord =  "<h3>(" + constant +  "<sup>" + (exponent + exponent2) + "</sup> ) = "  + Math.pow(constant , exponent + exponent2)  +  "</h3>"
     onerotwo = 5
     return
   }}
   if (type === 5 % 1 === 0 && Math.pow(constant , exponent * exponent2) ){
     if(Math.pow(constant , exponent * exponent2) )
      if (Math.pow(constant , exponent * exponent2) % 1 === 0 && Math.abs(Math.pow(constant , exponent * exponent2) <= 100)){
      var vraag = "<h3> (" + constant + "<sup>" + exponent + "</sup> ) <sup>" + exponent2 + "</sup> = ?"
      var vraagloc = document.getElementById('opgave')
      vraagloc.innerHTML = vraag

      antwoord = "<h3>" + constant + "<sup>" + (exponent * exponent2) + "</sup> = "  + Math.pow(constant , exponent * exponent2)  +  "</h3>"
     onerotwo = 5
     return
   }}
   if (type === 6){
     if (Math.abs((Math.pow(constant , exponent) * Math.pow(constant2 , exponent2))) < 100 && (Math.pow(constant , exponent) * Math.pow(constant2 , exponent2)) % 1 === 0 ){

      var vraag = "<h3> (" + constant + " * " + constant2 + ") <sup>" + exponent + "</sup> = ?"
      var vraagloc = document.getElementById('opgave')
      vraagloc.innerHTML = vraag

      antwoord = "<h3>" + constant + "<sup>" + exponent + " </sup>  * "+  constant2 + "<sup>" + exponent  +  " </sup> = "  + (Math.pow(constant , exponent) * Math.pow(constant2 , exponent2)) +   "</h3>"
     onerotwo = 5
    return
  }}
   if (type === 7){
     var vraag = "<h3> zet om naar een vierkanswortel" + constant + "<sup>" + exponent + "/" + exponent2 + " </sup> "
     var vraagloc = document.getElementById('opgave')
     vraagloc.innerHTML = vraag

     antwoord =   exponent2 + ' </span> &radic;<span style="text-decoration:overline"> <i>' + constant + '</i><span style="font-size: 30px;vertical-align:+100%;"> ' + exponent +'</span>'

     return
   }
   machten()
}

// ---------------------------------------------------------------------------- when "volgende" in the html document is clicked this function will start

volgende.onclick = function start(){

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = ""
  machten()

}
// ---------------------------------------------------------------------------- when "antwoord" in the html document is clicked this function will start.
verbeter.onclick = function Correct() {

  antwoordloc = document.getElementById('afgeleiden')
  antwoordloc.innerHTML = antwoord

}

if (firsttime){


  firsttime = false
  machten()


}
