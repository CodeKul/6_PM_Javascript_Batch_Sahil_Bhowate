//shallow copy vs deep copy

console.log("This is script.js file");

//a and b are both the primitive data types
let a = 14;
let b;

b = a; //deep copy

//modifying the value stored in the variable b
//And modifications in b are not affecting a
b = 88;

console.log("Value of a is " + a);
console.log("Value of b is " + b);
