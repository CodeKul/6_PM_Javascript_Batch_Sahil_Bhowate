//map method

let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let resultArray;

resultArray = inputArray.map(function (singleElement) {
  return singleElement > 5
});

console.log(resultArray);

//below operators return true or false value
// >
// >=
// ===
// <
// <=
// !==