console.log("This is script.js file");

let inputElement = document.getElementById("inputElement");

function buttonClick() {

  console.log("Button has been clicked");

  // console.log("inputElement.value is ");
  // console.log(inputElement.value);

  let userInput = inputElement.value;

  console.log("The userInput is ");
  console.log(userInput);
  console.log(typeof (userInput));

  //number system to the base 10
  let parsedInput = parseInt(userInput, 10);
  console.log(typeof (parsedInput));

  //it gives the remainder
  let remainder = parsedInput % 10;
  let divisionByTen = parsedInput / 10;
  divisionByTen = Math.trunc(divisionByTen);


  //it gives the remainder
  remainder = parsedInput % 10;

  console.log("remainder is ");
  console.log(remainder);

  console.log("division by ten is ");
  console.log(divisionByTen);



}

//initialize sum = 0 
//sum = sum + remainder
//let go the part after decimal point
////sum = sum + remainder