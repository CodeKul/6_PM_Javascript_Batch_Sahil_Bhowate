//write a program to identify whether the given input string is palindrome or not

console.log("This is script.js file");

let inputString = "civic";

let reverseString = "";

for (let i = inputString.length - 1; i >= 0; i--) {
  console.log(inputString[i]);

  reverseString = reverseString + inputString[i]; //concatenation of strings
}

console.log("The reverse string is ");
console.log(reverseString);

if (inputString === reverseString) {
  console.log("The given string is a palindrome");
}
else {
  console.log("The given string is not a palindrome");
}

