console.log("This is script.js file");

//body of printMessage function
//it is used to bring asynchronous behaviour in the program.
function printMessage(callback) {

  console.log("callback function is ");
  console.log(callback);

  callback();

}

//function passed as an argument to the function printMessage
function callbackFunction() {

  console.log("The message from callback function");

}

//callbackFunction function is a callback function
printMessage(callbackFunction); //calling the printMessage function