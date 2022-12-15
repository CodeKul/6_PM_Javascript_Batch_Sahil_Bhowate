//Async/await
//Async functions
//async keyword

//attaching the keyword before the keywrod function means ; function will return a promise object
async function fOne() {
  return 1;
}

//p contains the promise object
let p = fOne();

console.log(p);

//settlement of the promise object
p.then((response) => {
  console.log(response);
});

async function fTwo() {
  return Promise.resolve(1);
}

let pTwo = fTwo();

console.log("value of pTwo is ", pTwo);