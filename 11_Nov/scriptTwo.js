const countFlag = false;

let countPromiseObj = new Promise(function (resolve, reject) {

  //condition for resolving or rejecting the promise
  // === it chekcs the data type as well as the value
  // == operator it cheks only the value
  if (countFlag === true) {
    resolve("There is a count value");
  }
  else {
    reject('There is no count value');
  }

}
);

console.log(countPromiseObj);

countPromiseObj
  .then(function (message) {
    //then block when the promise is resolved
    console.log("We are in then block");
    console.log(message);
  })
  .catch(function (message) {
    //catch block when the promise is rejected
    console.log("We are in catch block");
    console.log(message);
  })


