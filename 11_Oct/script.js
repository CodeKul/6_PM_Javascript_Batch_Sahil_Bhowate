console.log("This is script.js file");

//symbol data type
//unique keys
//make a variable having symbol data type
let id = Symbol("id");

console.log(id);
console.log(typeof (id));

let user = { name: "John", [id]: 123 };
console.log("The user object is ");
console.log(user);

//iterate the object called user
for (let propertyName in user) {
  console.log(propertyName);
}

let userTwo = { name: "Thomas", idTwo: 234 };

for (let propertyName in userTwo) {
  console.log(propertyName);
}

console.log("The properties in the given object are");
console.log(Object.getOwnPropertyNames(userTwo));
console.log(Object.getOwnPropertyNames(user));
console.log(Object.keys(user));
console.log(Object.keys(userTwo));

//to know how many symbols are there in the object
console.log("The symbols in the given object are");
console.log(Object.getOwnPropertySymbols(user));
console.log(Object.getOwnPropertySymbols(userTwo));

