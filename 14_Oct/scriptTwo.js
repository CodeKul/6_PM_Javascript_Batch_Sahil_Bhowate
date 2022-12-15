//write a program to push the information typed on the input tag into the object

console.log("This is scriptTwo.js");

let inputElement = document.getElementById("enterInfo");

let contentArea = document.getElementById("contentArea");

let contentString = "";

let infoArray = [];

function storeInfo() {
  console.log("storeInfo function was called");
  console.log(inputElement.value);

  let obj = {
    info: inputElement.value
  }

  console.log(obj);

  //to push the object into the array
  infoArray.push(obj);

  inputElement.value = "";

  console.log("infoArray is ");
  console.log(infoArray);
}

//event listener function to populate the content
function populateContent() {

  for (singleObj of infoArray) {
    contentString = contentString + `
    <table>
    <tbody>
    <tr>
    <td>${singleObj.info}</td>
    <td><button>Delete</button></td>
    </tr>
      </tbody>
    </table>
    `
  }

  contentArea.innerHTML = contentString;


}





