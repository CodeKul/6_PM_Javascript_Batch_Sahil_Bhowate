//null vs undefined

let a; //undefined is assigned by the interpreter
console.log(a);
console.log("type of a is ");
console.log(typeof (a));

let b = null; //done by programmer
console.log(b);
console.log("type of b is ");
console.log(typeof (b));

//in js undefined and null are falsey values
//truthy values means those ones which are true

if (null) {
  console.log("We are in if block");
}
else {
  console.log("We are in else block");
}

if (undefined) {
  console.log("We are in second if block");
}
else {
  console.log("We are in second else block");
}
