console.log("This is scriptSix.js file");

// for of statement

let arr = [1, 2, 3, 4, 5, 6, 7];

//now we do not require a counter variable
for (z of arr) {
  console.log(z);
  z = z + 1;
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log(arr);

