let strOne = "This is a string";

console.log(strOne);

console.log(strOne[1]);

strOne[1] = 'H';

console.log("Output after change is ");
console.log(strOne);

//in case of mutable data types ; a part of it could be modified
let arr = [1, 2, 3, 4, 5]; //non primitive

arr[1] = 90;

console.log("arr after modification is ");
console.log(arr);

let obj = { name: "Thomas", address: "Pune" };

obj.address = "Kerala";

console.log(obj);