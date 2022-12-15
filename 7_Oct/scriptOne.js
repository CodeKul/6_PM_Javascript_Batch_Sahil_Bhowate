//event listener functions.
//events --- Examples :-- Pressing a key on the keyboard , click of the mouse , etc.

//we need to print a message after clicking on the mouse.

//printMessage() is a event listener function
function printMessage(z) {
  console.log(typeof (z));
  console.log(z.target);
  console.log("The button has been clicked");
}
