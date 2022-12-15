console.log("This is scriptTwo.js file");

//catching errors using the asynchronous function

let promise = new Promise(function (resolve, reject) {

  let a = 2;

  //setTimeout function has one anonymous function
  if (a === 9) {
    resolve('Promise resolved')
  }
  else {
    reject("The promise has been rejected");
  }

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

//Calling the asynchronous function and catching the error
asyncFunc().catch((errorMsg) => {
  console.log(errorMsg);
})