console.log("This is script.js file");

//undefined
//null

let a;
let b;

let c = null;
let d = null;

console.log("Value of variable a is ");
console.log(a);
console.log("Value of variable b is ");
console.log(b);

console.log("Value of variable c is ");
console.log(c);

console.log("Value of variable d is ");
console.log(d);

//function not returning any value
function printGreeting() {
  console.log("Good Evening Everyone !!");
}

//function returning a value
function calculateSum(a, b) {
  let result = a + b;

  return (result);
}

let sum = calculateSum(5, 3);

console.log("sum is " + sum);

let output = printGreeting();

console.log("value of output is " + output);


