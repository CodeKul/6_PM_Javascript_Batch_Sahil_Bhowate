//What might be asked about rest parameter and spread operator in the interview ?
//How to use the spread operator to pass the multiple arguments to the function easily ?
//How to use the rest parameter to receive the multiple parameters in the function easily ?

console.log("This is scriptTwo file");

let colors = ["Red", "Blue", "Green"];
let moreColors = ["Purple", "Yellow"];

//I wish to push all the elements of the array moreColors into the array colors
// [].push.apply(colors, moreColors);

// console.log("colors array is ");
// console.log(colors);

//I wish to push all the elements of the array moreColors into the array colors using spread operator
colors.push(...moreColors);
console.log("colors array is ");
console.log(colors);