console.log("scriptTwo file");

let addressObj = {
  colonyName: "Blue Heaven",
  streetName: "Navathe Road",
  pincode: "444605"
}

let xyzObj = structuredClone(addressObj); //deep copy
//spread operator and rest

xyzObj.colonyName = "Earth Colony"

console.log("addressObj value is ");
console.log(addressObj);

console.log("xyzObj value is ");
console.log(xyzObj);