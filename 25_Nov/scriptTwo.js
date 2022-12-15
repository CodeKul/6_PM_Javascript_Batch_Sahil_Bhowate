//This keyword in global context

console.log("The value of this keyword is ", this);

console.log(this === window);

let obj = {
  cartItem: "Hat"
}

console.log("The value of obj before adding the color property is ", obj);

obj.color = "Red";

console.log("The value of obj is ", obj);

//adding the property called color into the global window object
this.color = "Red";
console.log(window.color);

//this keyword is used to refer the javascript objects.