//closures in js 
//What is a closure 

//closure has 3 kinds of scope
//a closure is a function inside a function and it makes the function statefull

//statefull

function Home() {

  var roomOne = "Hall";

  //baseHome is one function
  function basementHome() {
    var kitchen = "Modular Kitchen";
    console.log("I have:", roomOne, kitchen);
  }

  //we are returning the function called basementHome()
  return basementHome;

}

var ourHome = Home();

console.log(typeof (ourHome));
console.log(ourHome);

//calling the ourHome() function
ourHome();
