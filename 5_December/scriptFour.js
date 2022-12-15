//difference between let , var , const

//variable a is declared inside a block
//let keyword se declare kiye gaye variables ka scope block-level scope hota hai.
{
  let a = 9;
  console.log("Value of variable a is ", a);
}

console.log("Value of variable a is ", a);

//var keyword se declare kiye gaye variables ka scope block level nahi hota.
{
  var b = 10;
  console.log("Value of variable b is ", b);
}

console.log("Value of variable b is ", b);

//const keyword se declare kiye gaye variables ka scope block level hota hai.
{
  const c = 77;
  console.log("Value of variable c is ", c);
}

console.log("Value of variable c is ", c);