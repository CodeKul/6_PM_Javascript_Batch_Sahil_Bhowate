//write a program to populate the div tag with the characters that were typed by the user in the input tag

console.log("This is scriptThree.js file");

let inputTag = document.getElementById("inputBox");

let divElement = document.getElementById("contentArea");

//event listener function
function printMessage(z) {

  let userInput = inputTag.value; //fetch the characters that are typed in the input tag

  //template literal string
  //${variable's name}
  divElement.innerHTML = `<h1>${userInput}</h1>`;

}
