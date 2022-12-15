//arguments binding

//Regular Function
function printArguments(a, b) {
  console.log(arguments);
}

printArguments(1, 2);

//arrow function
// const printArrowArguments = (a, b) => {
//   console.log(arguments);
// }

// printArrowArguments(2, 6);

const printArrowArguments = (...args) => {
  console.log(...args);
}

printArrowArguments(2, 6);
