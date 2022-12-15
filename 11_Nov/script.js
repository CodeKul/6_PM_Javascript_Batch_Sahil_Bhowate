console.log("This is script.js");
//promise 
//2 possibilities of promise
//time anepar promise nibhana YA promise nahi nibhana

//resolve YA reject

//3 states of javascript's promise object are -- Pending , Resolved , Rejected

//what is the differecne between callbacks and promises ?
//chaining is the advantage of using promises over callback functions
//What is chaining ?

//Callback hell is the disadvantage of using callback functions
//requesting data from the server in a asynchronous manner

//Promise is the constructor 
//myPromise is the name of the promise object
const myPromise = new Promise((resolve, reject) => {
  //let condition

  //if(condition is met){
  // resolve('Promise is resolved successfully.')
  // }
  //else{
  // reject('Promise is rejected');
  // }

});

console.log(myPromise);
console.log(typeof (myPromise));

//use then() block for resolved promises
//then method is called when the promises gets into the resolved state
myPromise.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
})
