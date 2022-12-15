console.log("Application of js promises");

let url = `https://randomuser.me/api/`;

//fetch is a function which returns the promise object
let promiseObj = fetch(url);

console.log("promiseObj is ", promiseObj);

//settlement of the promise object promiseObj
promiseObj.then((response) => {
  console.log(typeof (response));
  console.log("The response is ", response);

})
  .catch((error) => {
    console.log(error);
  })