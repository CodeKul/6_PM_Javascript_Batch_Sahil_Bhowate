function printMessage() {

  console.log("This message is shown after 6 seconds");

}

//printMessage function is a callback function becasue it was passed as an argument.
setTimeout(printMessage, 6000);

console.log("Message at line number 12");