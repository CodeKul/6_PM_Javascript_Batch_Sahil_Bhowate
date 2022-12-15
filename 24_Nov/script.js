console.log("This is script.js file");

function compare(a, b) {
  return a - b;
}

// let result = compare(5, 6);

//spreading the values 5 and 6 using the spread operator. And sending them as arguments
let result = compare(...[5, 6]);

console.log(result);

function multiplyThreeNumbers(a, b, c) {
  return a * b * c
}

// let multiplyResult = multiplyThreeNumbers(2, 3, 4);

// [2,3,4] unpack the elements in this array and send them as arguments to the function multiplyThreeNumbers
let multiplyResult = multiplyThreeNumbers(...[2, 3, 4]);

console.log(multiplyResult);

//Using apply() method of ES-5 (EcmaScript-5) to spread the elements of array and sending them as arguments
function multiplyTwoNumbers(a, b) {
  return a * b;
}

//spreading the array [4,5] and sending them as arguments to the function multiplyTwoNumbers
//This is to tell the advantage / usage of spread operators over apply method of javascript.
let resultThree = multiplyTwoNumbers.apply(null, [4, 5]);
console.log("The multiplication of two numbers is ", resultThree);

