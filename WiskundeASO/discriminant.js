function Discriminant(A , B , C) {

  var Discriminant = (-B)*(-B) - 4*A*C
  var Answer = "Discriminant is below zero"

  if (Discriminant == 0){
   var Zero =  ((-B - Math.sqrt(Discriminant))/2*A) ;

     Answer = Zero

  }
  if (Discriminant > 0){

    var Zero1 =  ((-B + Math.sqrt(Discriminant))/2*A) ;
    var Zero2 =  ((-B - Math.sqrt(Discriminant))/2*A) ;

    Answer = Zero1 + Zero2
  }



}
function Horner(A , B , C , D , E) {
  var possibleNumbers = new Array
  for (var i = -E ; i <= Math.abs(E) ; i++){
   console.log( E % i );
   if ( E % i == 0){
     possibleNumbers.push(i)
     possibleNumbers.push(-i)
   }
 }
  console.log(possibleNumbers);
  if (A == 3){
    for (var j = 0 ; j < possibleNumbers.length - 1; j++){
      var current = B * possibleNumbers[j]
      current = current + C
      current = current * possibleNumbers[j]
      current = current + D
      current = current * possibleNumbers[j]
      current = current + E
      current = current * possibleNumbers[j]
      if (current == 0)
       return possibleNumbers[j]
    }
  }
  if (A == 2){
    for (var j = 1 ; j < possibleNumbers.length; j++){
      var current = C * possibleNumbers[j]
      current = current + D
      current = current * possibleNumbers[j]
      current = current + E
      current = current * possibleNumbers[j]

      if (current == 0)
       return j
    }
  }
  return possibleNumbers
}
function Afgeleiden(Constant , number , exp) {

  var a = Constant * exp , b = "X" + "^"+ (exp - 1)
  var Results = a.toString() + b.toString()
  return Results

}
