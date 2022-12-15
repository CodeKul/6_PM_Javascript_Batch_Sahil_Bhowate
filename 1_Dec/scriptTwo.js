//Example of getters and setters in javascript class
class Person {

  contructor(name) {
    this.name = name;
  }

  //getter
  get personName() {
    return this.name;
  }

  //setter
  set personName(x) {
    this.name = x;
  }

}

//Making an object of the class called Person
let personOne = new Person("Rajesh");
console.log("personOne object is ", personOne);

//using the setter method called personName to set the value for the given object
personOne.personName = "Rohan";
console.log("personOne object is ", personOne);

console.log("PersonOne object has the value ");
console.log(personOne.name);