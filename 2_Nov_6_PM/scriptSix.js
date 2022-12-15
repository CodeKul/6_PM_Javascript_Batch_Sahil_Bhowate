// Passing a function as an argument to another function
//callback

//function anotherFunction is going to be passed as an argument to the function 'callingFunction'
//criteria one : - Passing a function as an argument to another function
//criteria two : - Returning a function from another function
//Higher order functions

//criteria one : - Passing a function as an argument to another function
const anotherFunction = function () {
  console.log("This is a function which is to be called finally");
}

const callingFunction = function (functionToBeCalled) {
  //functionToBeCalled actually contains the function anotherFunction
  functionToBeCalled();
}

//criteria one : - Passing a function as an argument to another function
callingFunction(anotherFunction);