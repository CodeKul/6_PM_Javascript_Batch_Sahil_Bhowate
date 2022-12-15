//Write a program to identify whether a given number is prime or not

//write a program to print all the numbers from 2 to n-1 ; where n is the value of the input number.

//write a program to traverse from 2 to 8. And come out of the loop , at the moment when you get the number 5.

let inputNumber = 10;

let x;

let isPrime = false;

// 2,3,4,5,6,7,8,9

// i = 2  -- > i < 9 -- > print 2 -- > 2 === 5 -- -> i=2 + 1
// i = 3  -- > i < 9 -- > print 3 -- > 3 === 5 -- -> i=3 + 1
// i = 4  -- > i < 9 -- > print 4 -- > 4 === 5  -- -> i=4 + 1
// i = 5  -- > i <9  -- > print 5 -- > 5===5 ---> break statement is executed

for (let i = 2; i < inputNumber; i++) {


  if (inputNumber % i === 0) {
    isPrime = false;
    x = i;
    break;
  }
  else {
    isPrime = true;
  }

}

if (isPrime === true) {
  console.log("The number is a prime number");
}
else if (isPrime === false) {
  console.log("The number is not a prime number");
}





