console.log("scriptFour.js file");

//Applying the spread operator on the object
const ObjectOne = { a: 1, b: 2 };
const ObjectTwo = { c: 3 };

let ObjectFour = { a: 5, b: 6 };

console.log("ObjectFour before applying spread operator is");
console.log(ObjectFour);

//applying spread operator to modify the single value
ObjectFour = { ...ObjectOne };

console.log("ObjectFour after applying spread operator is");
console.log(ObjectFour);

//copy the properties in ObjectOne and ObjectTwo into the ObjectThree
const ObjectThree = { ...ObjectOne, ...ObjectTwo };

console.log(ObjectThree);