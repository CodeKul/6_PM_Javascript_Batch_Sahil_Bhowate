//Regular function vs arrow function -- this keyword

//Regular function kaise call kiya gaya ; uss par depend hota hai this keyword ka value

//simple invocation
function simplyPrintMessage() {
  console.log(this);
}

simplyPrintMessage();

//Method invocation of normal function 
const invokeMethod = {

  method() {
    console.log(this);
  }

}

invokeMethod.method();

var name = "Rohan";

let newObject = {

  name: "RohanOne",

  functionOne: () => {
    console.log("Value of name property in case of arrow function ", this.name);
  },

  functionTwo() {
    console.log("Value of name property in case of regular function ", this.name);
  }

}

//calling the arrow function
newObject.functionOne();

//calling the regular function
newObject.functionTwo();

