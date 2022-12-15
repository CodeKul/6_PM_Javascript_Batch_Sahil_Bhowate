let arr = [1, 2, 3, 4, 5]; //array

let obj = { valueOne: 'a', valueTwo: 'b', valueThree: 'c' }; //object

console.log("type of arr is");
console.log(typeof (arr));

console.log("type of obj is");
console.log(typeof (obj));

console.log(Array.isArray(arr));
console.log(Array.isArray(obj));

console.log(arr instanceof Object);
console.log(arr instanceof Array);

console.log(obj instanceof Object);
console.log(obj instanceof Array);