//closures in js 
//What is a closure 

//closure has 3 kinds of scope
//a closure is a function inside a function and it makes the function statefull

//statefull

//Home is a parent function
function Home() {

  //roomOne has function scope. Not accessible out of the function body
  //the variables within function would exists during the function's execution
  var roomOne = "Hall";

  //baseHome is one inner function
  //basementHome is a child function
  function basementHome() {
    //variable kitchen has function scope
    // Not accessible out of the function body
    var kitchen = "Modular Kitchen";
    console.log("I have:", roomOne, kitchen);
  }

  //we are returning the function called basementHome()
  return basementHome;

}

//storing the child function
var parentFunctionResult = Home();

parentFunctionResult();//calling the child function

//the child function [basementHome] has acess to the variables of parent [Home()] function.
//Why -- beacuse of closures
//parent function has passed its scope chain to child function