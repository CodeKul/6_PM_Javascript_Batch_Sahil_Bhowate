console.log("This is scriptTwo.js file");

let promise = new Promise(function (resolve, reject) {

  //setTimeout function has one anonymous function
  setTimeout(function () {
    // here we resolve the promise without any condition
    resolve('Promise resolved')
  }, 4000);

});

//asynchronous function
async function asyncFunc() {

  //wait until the promise resolves
  //The await keyword suspends the execution of the asyncFunc() function
  //The lines of code below the await statement would not get executed.
  let result = await promise;

  console.log(result);

  console.log("Hello");
  console.log("The result of the promise has been printed");

}

//Calling the asynchronous function
asyncFunc();