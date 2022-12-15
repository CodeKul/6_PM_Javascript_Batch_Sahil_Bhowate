console.log("This is script.js file");

const arr = ['a', 'b', 'c', 'd'];
console.log(arr);   //['a', 'b', 'c', 'd']

//using the spread operator
console.log(...arr);   //a b c d   --- 1st way 
console.log('a', 'b', 'c', 'd');   //a b c d   -- 2nd way

//3rd way
let str = "";
for (alphabet of arr) {
  str = str + " " + alphabet;
}

console.log(str); //3rd way



