console.log("script.js file");

//asynchronous function
async function fOne() {
  console.log("This is asynchronous function");

  let a = 10;

  let promiseObj = new Promise((resolve, reject) => {

    if (a === 9) {
      resolve("The promise has been resolved");
    }
    else {
      reject("The value of a is not 9. The promise is rejected");
    }

  });

  return promiseObj;
}

let p = fOne();

//code to settle the promise object
p.then((response) => {
  console.log("We entered the then block");
  console.log(response);
})
  .catch((error) => {
    console.log("We entered the catch block");
    console.log(error);
  })