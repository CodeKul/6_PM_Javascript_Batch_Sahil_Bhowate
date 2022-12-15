//value of this keyword in strict mode
"use strict";

function show() {
  console.log("The value of this keyword is ", this);
  console.log(this === undefined);
}

show();