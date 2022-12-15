//Class in javascript
//What does a class contain ?
//-- [1]Data [2]Functions to manipulate the data

//How to write a class in ES6 version of javascript

//name is the data of the class called Person
//getName() is the name of the function of the class called Person
//constructor initialize karega  ; matlab value assign karega given class ke data ko.
class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

//Rohan is the name of the object
//And we are calling the class's constructor to initialize the values for the object called "Rohan".
let RollNumberOne = new Person("Rohan Kumar");

let RollNumberTwo = new Person("Rakesh Kumar");

console.log("RollNumberOne object is ", RollNumberOne);
console.log("RollNumberTwo object is ", RollNumberTwo);

console.log(RollNumberOne.getName());
console.log(RollNumberTwo.getName());

class Pen {
  constructor(companyName, penColor, penPrice) {
    this.companyName = companyName;
    this.penColor = penColor;
    this.penPrice = penPrice;
  }

  printPenInfo() {
    console.log(this.companyName);
    console.log(this.penColor);
    console.log(this.penPrice);
  }
}

//creating an object called penOne ; which belongs to the class called Pen
let penOne = new Pen("Cello", "Blue", "10");

let penTwo = new Pen("AddGel", "Blue", "10");

console.log("penOne object is ", penOne);
console.log("penTwo object is ", penTwo);