console.log("Script.js file");

//let keyword usage
let a = 90;
console.log("Value of variable a is ", a);

var c = 34;
console.log("Value of variable c is " + c);

{ //block
  let b = 88; //only accesible in the block
  console.log("Value of variable b is " + b);
}

{
  var d = 76; //also accesible outside the block
}
console.log("Value of variable d is " + d);

const f = 99; //immutable or not mutable or not changable
f = 45;
console.log("Value of variable f is " + f);

let h = 77; //mutable or changable
h = 555;
console.log("The value of variable h is " + h);

