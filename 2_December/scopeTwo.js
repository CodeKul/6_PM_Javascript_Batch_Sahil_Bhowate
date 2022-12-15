//modifying the global variables inside the function

let a = "Hello";

function greet() {
  a = 3;
}

//before function call
console.log("Before function call the value of a is ", a);

//after function call
greet();

console.log("After function call the value of a is ", a);