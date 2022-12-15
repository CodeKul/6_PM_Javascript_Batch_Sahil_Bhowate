// import axios from "axios";

//using axios library
console.log("This is scriptTwo.js file");

//axios.post(url,data)
//axios.put(url,data)

let url = `https://jsonplaceholder.typicode.com/users`;

let p = axios.get(url);

console.log("value of p is ", p);
p.then((response) => {
  console.log("response is ", response);
  console.log("array in the response is ", response.data);
})
  .catch((error) => {
    console.log(error);
  })