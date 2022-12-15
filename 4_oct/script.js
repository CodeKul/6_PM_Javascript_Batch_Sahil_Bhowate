console.log("This is script.js file");

let colorObjArr = [{ color: "red", serialNum: 1 },
{ color: "blue", serialNum: 2 },
{ color: "green", serialNum: 3 }];

console.log(colorObjArr[0]);
console.log(colorObjArr[1]);
console.log(colorObjArr[2]);

for (let i = 0; i < colorObjArr.length; i++) {
  console.log(colorObjArr[i].color);
}

for (element of colorObjArr) {
  console.log(element.color);
}

//API -- Application Programming Interface




