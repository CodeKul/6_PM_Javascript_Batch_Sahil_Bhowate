let transport = [{
  Vehicle: "Car",
  Color: "Red",
  City: "Pune"
},
{
  Vehicle: "Truck",
  Color: "White",
  City: "Nagpur"
},
{
  Vehicle: "Cycle",
  Color: "Purple",
  City: "Aurangabad"
},
];

//make a table having three columns namely Vehicle , Color , City.
//  using for loop or map function populate ther table through the array of js objects called transport
//for in statement is used to iterate through the properties of the object

// let columnNames = "";
// columnNames = columnNames + `<th>${propertyName}</th>`;

// columnNames = `<th>Vehicle</th>`;
// columnNames = `<th>Vehicle</th> <th>Color</th>
// columnNames = `<th>Vehicle</th> <th>Color</th> <th>City</th>

let columnElement = document.getElementById("columnElement");
let contentArea = document.getElementById("contentArea");

let objOne = transport[0];
console.log(objOne);

let columnNames = "";

let tableRowStr = "";

//iteration using for in statement on object
for (propertyName in objOne) {
  console.log(propertyName);
  columnNames = columnNames + `<th>${propertyName}</th>`;
}

columnElement.innerHTML = columnNames;

//iteration on array using for of statement
for (let transportObj of transport) {
  console.log(transportObj);

  tableRowStr = tableRowStr + `<tr>
  <td>${transportObj.Vehicle}</td>
  <td>${transportObj.Color}</td>
  <td>${transportObj.City}</td>
</tr>`
}

console.log(tableRowStr);

contentArea.innerHTML = tableRowStr;





