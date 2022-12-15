console.log("This is scriptTwo.js file");

let numArray = [1, 2, 3, 4, 67, 9];

let resultArray;

resultArray = numArray.map(function (singleElement) {
  return singleElement * 2
});

console.log(resultArray);
