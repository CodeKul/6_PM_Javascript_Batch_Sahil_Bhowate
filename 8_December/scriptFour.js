//No duplicate named parameters

// 'use strict';

function squareTheNumber(a, a) {
  console.log("Sqaure of the number is ", a * a);
}

squareTheNumber(2, 2);

const squareTheNumberArrow = (a, a) => {
  console.log("Sqaure of the number is ", a * b);
}

squareTheNumberArrow(3, 3);