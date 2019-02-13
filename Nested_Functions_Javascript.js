
//How nested functions work

function hypotenuse(a, b) {

   function square(x) { return x*x; }

   return Math.sqrt(square(a) + square(b));

 }


//Second function to call the first
            

function secondFunction() {

   var result;
   result = hypotenuse(1,2);

   document.write ( result );

 }


