console.log("scriptTwo file");

let addressObj = {
  colonyName: "Blue Heaven",
  streetName: "Navathe Road",
  pincode: "444605"
}

let xyzObj = addressObj; //shallow copy

//lets assume that the structure of the object addressObj has been copied into the xyzObj
//xyzObj = {
//   colonyName: "Blue Heaven",
//   streetName: "Navathe Road",
//   pincode: "444605"
// }
//It is proved that our above assumption is wrong. Because , xyzObj is the shallow copy of the object addressObj. xyzObj contains the reference of the object addressObj

xyzObj.colonyName = "Earth Colony"

console.log("addressObj value is ");
console.log(addressObj);

console.log("xyzObj value is ");
console.log(xyzObj);