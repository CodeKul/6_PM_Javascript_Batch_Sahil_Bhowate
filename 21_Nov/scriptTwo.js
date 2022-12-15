async function fOne() {

  //defining a promise object
  let promiseObj = new Promise((resolve, reject) => {

    let a = 8;

    if (a === 7) {
      resolve("value of a is 7. Promise is settled and it is resolved");
    }
    else {
      reject("value of a is not 7. Promise is not settled");
    }

  })

  return promiseObj;
}

let p = fOne();

//settlement of the promise returned by the asynchrounous function
p.then((response) => {
  console.log(response)
})
  .catch((errMsg) => {
    console.log(errMsg);
  });