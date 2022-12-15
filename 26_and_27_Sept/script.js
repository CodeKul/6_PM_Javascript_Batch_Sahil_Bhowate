console.log("This is script.js file");

//looping statemnets -- for loop
//What is a loop ?
//A collection of programming instructions that are executed repeatedly.

//example of for loop
let arr = [1, 2, 3, 4, 5];


// index of element 1 -- 0
// index of element 2 -- 1
// index of element 3 -- 2
// index of element 4 -- 3
// index of element 5 -- 4

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

console.log("The output using for loop is ");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Desired output is
// outputArr = [2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] + 1;
}

console.log("The final result is ");
console.log(arr);

//arr[0] = arr[0] + 1;
//arr[1] = arr[1] + 1;
//arr[2] = arr[2] + 1;
//arr[3] = arr[3] + 1;
//arr[4] = arr[4] + 1;


