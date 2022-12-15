console.log("This is script.js");

//object is a collection of key value pairs
let address = {
  streetName: "Baker's Street",
  colony: "Blue Heaven Colony"
}

for (propertyName in address) {
  console.log(propertyName);
}

let colony = Symbol("colony");
console.log(colony);
console.log(typeof (colony));

let addressTwo = {
  streetName: "Baker's Street",
  [colony]: "Blue Heaven"
}

console.log(addressTwo);

console.log("propertyNames in addressTwo are");
for (propertyName in addressTwo) {
  console.log(propertyName);
}

console.log(Object.keys(addressTwo));

console.log(Object.getOwnPropertySymbols(addressTwo));
