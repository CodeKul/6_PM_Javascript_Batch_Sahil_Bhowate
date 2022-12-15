//Arrow functions
//They have been there since ES6 version 

//In case of arrow functions ; when there is no return statement. And there is only one statement. And that statement would be considered as the return statement.
let multiply = (x, y) => x * y;

console.log(multiply(3, 6));

let substract = (c, d) => {
  let result = c - d;
  console.log(result);

  //when there is need to return a value from the arrow function. And the function body contains more than one line ; then we need to use the return keyword.
  return result;
}

let sub = substract(7, 8);

console.log("value of sub is ");
console.log(sub);

