//pen is one object having 2 properties
//in this case ; the this keyword contains the reference of the object itself
let pen = {

  brand: "Cello Gripper",
  getBrand: function () {
    return this.brand;
  }

}

//penBrand contains the body of the function
//bind method creates a new function whose this keyword is set to a speeicied value.
//Before using the bind() method the penBrand function contains the value of this keyword as global window object.
let penBrand = pen.getBrand.bind(pen);

console.log("penBrand is ", penBrand);

// console.log(pen.getBrand());

console.log(penBrand());