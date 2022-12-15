//write a program , to concatenate the character 'c' to each of the element 
//in the input array

let inputArray = ['a', 'b', 'c', 'd', 'e', 'f'];

// let resultArray = ['ac','bc','cc','dc','ec','fc'];

let resultArray;

resultArray = inputArray.map(function (singleElement) {

  return (singleElement + 'c');

});

console.log(resultArray);

