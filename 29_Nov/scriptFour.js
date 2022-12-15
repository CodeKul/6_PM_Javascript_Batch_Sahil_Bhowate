//call method's application

function getBrand() {
  console.log("The value of this keyword is ", this);
}

let honda = {
  brand: "Honda"
}

let audi = {
  brand: "Audi"
}

// getBrand();
getBrand.call(honda);