console.log("scriptTwo.js file");

let addressObj = {
  streetName: "Navathe Road",
  colonyName: "Blue Heaven",
  PinCode: "444605"
}

//shallow copy
// let ObjTwo = addressObj; 

//deepcopy
let ObjTwo = structuredClone(addressObj);

ObjTwo.PinCode = "444607";

console.log("The value of addressObj is ");
console.log(addressObj);

console.log("The value of ObjTwo is ");
console.log(ObjTwo);