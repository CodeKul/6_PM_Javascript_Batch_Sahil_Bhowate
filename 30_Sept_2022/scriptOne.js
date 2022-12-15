//array.find method

console.log("This is scriptOne.js file");

let numArray = [1, 2, 3, 4, 67, 9];

let requiredResult = numArray.find(
  function (singleElement) {
    return singleElement > 4
  }
);

console.log(requiredResult);

let alphabetArray = ['a', 'b', 'c', 'd'];

let requiredAlphabet = alphabetArray.find(
  function (singleElement) {
    return singleElement === 'c'
  }
);

console.log(requiredAlphabet);