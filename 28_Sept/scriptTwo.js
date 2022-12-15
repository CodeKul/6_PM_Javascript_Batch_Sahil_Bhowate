console.log("This is scriptTwo.js");

//identify whether a given number is prime or not
let inputNumber = 19;

// 9 % 2  = 1
// 9 % 3 = 0
// 9 % 4 = 1
// 9 % 5 = 4
// 9 % 6 = 3
// 9 % 7 = 2
// 9 % 8 = 1

let isPrime;

// let factor;

//break statement jis block main hai ; uss block ka jo parent block hai
//useke bahar hum aa jayenge
for (let i = 2; i < inputNumber; i++) {
  console.log(inputNumber % i);

  if (inputNumber % i === 0) {
    isPrime = false;
    break;
  }
  else {
    isPrime = true;
  }

}

// console.log("The factor of the input number is " + factor);

if (isPrime === true) {
  console.log("The number is a prime number");
}
else if (isPrime === false) {
  console.log("The number is not a prime number");
}

