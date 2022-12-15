console.log("This is script.js");

//expected output is [3,5,7,9,11,2,4,6,8,10]

//tradiotional method
// for (element of evenNumbers) {
//   oddNumbers.push(element);
// }

// console.log(oddNumbers);

// (...)
//What are iterable objects ? --- array , map , set
//spread operator will unpack the elements
//whereas rest parameter will pack the elements

let evenNumbers = [2, 4, 6, 8, 10];

let oddNumbers = [3, 5, 7, 9, 11, ...evenNumbers];

console.log("combined array is ", oddNumbers);

//usage of rest parameter
function printArray(a, b, ...args) {
  console.log("args is ", args);
}

printArray(1, 2, 3, 4, 5, 6);

