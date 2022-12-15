console.log("This is scriptFour.js file");

//IIFE --- IMMEDIATELY INVOKED FUNCTION EXPRESSION
//'INVOKED' means getting called

let greeting = (function () {

  let wishes = "Good Evening !!";
  console.log(wishes);
  return wishes;

})();

