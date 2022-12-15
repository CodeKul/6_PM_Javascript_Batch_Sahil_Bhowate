//local scope of the variable
let a = "hello";

function greet() {
  //b is a variable having local scope
  let b = "World";
  console.log(a + b);
}

greet();
console.log(a + b);

//Note : Variable declarations made using the let keyword have the local scope.