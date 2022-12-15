console.log("scriptThree.js");

//clone the array using spread operator
let arrOne = [4, 5, 6];

//only the reference of arrOne is in arrTwo. Not the structure , because it is a on-primitive data type. It is an object. We made a shallow copy from the below assignment statement
// let arrTwo = arrOne;

//deep copy using the spread operator
let arrTwo = [...arrOne];

arrOne.push(7);

console.log(arrOne);
console.log(arrTwo);