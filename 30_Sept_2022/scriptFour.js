//write a program , to concatenate the character 'c' to each of the element 
//in the input array

let inputArray = ['a', 'b', 'c', 'd', 'e', 'f'];

let resultArray = [];

for (let i = 0; i < inputArray.length; i++) {
  console.log(inputArray[i] + 'c');
  resultArray.push(inputArray[i] + 'c');
}

console.log(resultArray);