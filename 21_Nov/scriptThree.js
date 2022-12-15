//program to demonstrate the usage of await keyword

async function fOne() {

  //defining a promise object
  let promiseObj = new Promise((resolve, reject) => {

    let a = 7;

    if (a === 7) {

      setTimeout(() => resolve("value of a is 7. Promise is settled and it is resolved"), 5000);

    }
    else {
      reject("value of a is not 7. Promise is not settled");
    }
  })

  //the lines after the below line having await keyword will not get executed ; jab tak promise resolve ya reject nahi ho jata.
  let resultOfPromiseSettlement = await promiseObj;

  //await keyword suspends the execution of below lines
  console.log("first line after the await keyword");
  console.log("second line after the await keyword");

  console.log(resultOfPromiseSettlement);

}

//calling the asynchronous function
fOne();

