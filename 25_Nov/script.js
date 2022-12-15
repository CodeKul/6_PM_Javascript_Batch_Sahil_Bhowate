console.log("This is script.js file");

//counter is a javascript object
//it has 2 properties called count , and next
//The "next" property contains the function body
let counter = {

  count: 0,
  next: function () {
    console.log("The value of this keyword is ", this);
    return ++this.count;
  }

}

let countValue = counter.next();

console.log("countValue in the counter object is ", countValue);

