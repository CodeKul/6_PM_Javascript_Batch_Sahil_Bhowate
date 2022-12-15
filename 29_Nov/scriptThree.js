//call method's application

function getBrand(prefix) {
  console.log(prefix + this.brand);
}

let honda = {
  brand: "Honda"
}

let audi = {
  brand: "Audi"
}

//putting the this keyword value of getBrand function as honda object
getBrand.call(honda, "Its a ");

//putting the this keyword value of getBrand function as audi object
getBrand.call(audi, "Its a ");

