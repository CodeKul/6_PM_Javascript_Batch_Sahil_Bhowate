//let arr = [[1,2] , [3,4] , [4,5] , [6,7] ,  8, 9 ,10];

//Process the array arr and bring the output array as shown below
// requiredOutput = [1, 2, 3, 4,4, 5, 6, 7, 8, 9, 10];

let arr = [[1, 2], [3, 4], [4, 5], [6, 7], 8, 9, 10];

let requiredOutput = [];

for (let i = 0; i < arr.length; i++) {

  if (typeof (arr[i]) === "object") {
    console.log("array is there");

    let temp = arr[i];

    for (j = 0; j < temp.length; j++) {
      console.log(temp[j]);
      requiredOutput.push(temp[j]);
    }

  }
  else if (typeof (arr[i]) !== "object") {
    console.log("array is not there");
    console.log(arr[i]);
    requiredOutput.push(arr[i]);
  }

}

console.log("The final result is ");
console.log(requiredOutput);