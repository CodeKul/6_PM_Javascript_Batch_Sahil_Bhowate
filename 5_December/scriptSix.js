function valueOfA() {

  var a = 10;
  console.log("Value of variable a inside the function is ", a);
}

valueOfA();
//variables jo var keyword se declare kiye gaye hai ; unka function scope hota hai. Par yaad rakhein unka block scope nahi hota.
// console.log("Value of variable a outside the function is ", a);

function valueOfB() {

  let b = 11;
  console.log("Value of variable b inside the function is ", b);
}

//variables jo let keyword se declare kiye gaye hai ; unka function scope hota hai. Par yaad rakhein unka block scope bhi hota hai
// console.log("Value of variable b outside the function is ", b);
valueOfB();

function valueOfC() {

  const c = 10;
  console.log("Value of variable c inside the function is ", c);
}

valueOfC();

//variables jo const keyword se declare kiye gaye hai ; unka function scope hota hai. Par yaad rakhein unka block scope bhi hota hai.
console.log("Value of variable c outside the function is ", c);