let arrayOne = [1, 2, 3, 4, 5];

let arrayTwo;

//shallow copy of non-primitive data types
//The reference of arrayOne is in arrayTwo
arrayTwo = arrayOne;

//deepcopy of non-primitive data types
// arrayTwo = structuredClone(arrayOne);

arrayTwo[0] = 99;

console.log("arrayOne is ");
console.log(arrayOne);

console.log("arrayTwo is ");
console.log(arrayTwo);
