//returning a function from another function 
//What are higher order functions ?
//criteria one : - Passing a function as an argument to another function
//OR
//criteria two : - Returning a function from another function
//A JS function which satisfies either criteria 1 OR  criteria two ; is known as higher order function.

//calculateSum is one function
const calculateSum = () => {

  //sum is one function
  const sum = (a, b) => a + b;

  console.log("body of sum function is ");
  console.log(sum);

  //returning the function called sum
  return sum;

}

//calling the function calculateSum()
const z = calculateSum();

console.log("value of variable z is ");
console.log(z);

console.log(z(2, 3));

