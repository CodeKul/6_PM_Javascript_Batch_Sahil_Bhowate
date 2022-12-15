let a = "hello";

function modifyVariableA() {
  a = 3;
}

//before the function call
console.log("Value of variable a before function call ", a);

//after the function call
modifyVariableA();

console.log("Value of variable a after function call ", a);