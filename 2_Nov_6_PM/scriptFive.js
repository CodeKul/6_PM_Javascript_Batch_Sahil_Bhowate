console.log("scriptFive.js file");

//criteria one : - Passing a function as an argument to another function
//criteria two : - Returning a function from another function

let arr = [1, 2, 3, 4, 5];

function incrementItem(arrayElement) {

  let outputArray = [];

  for (numElement of arrayElement) {
    numElement = numElement + 1;
    outputArray.push(numElement);
  }

  return outputArray;
}

console.log(incrementItem(arr));

