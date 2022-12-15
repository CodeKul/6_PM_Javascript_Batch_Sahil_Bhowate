//command for installing the json server

//ek folder banao
//uske andar jao through vs code terminal [use the command cd <Folder Name>]
//Execute the below command
// npm install -g json-server 
//make the file called db.json in the same folder

//command for running the json server
//json-server --watch db.json

console.log("This is script.js");

let url = `http://localhost:3000/students`;

let postBtn = document.getElementById("postBtn");

postBtn.addEventListener('click', postStudentData);

function getStudentInfo() {
  axios.get(url)
    .then((response) => {

      console.log("The response from the json server is ");
      console.log(response);

    })
    .catch((error) => {
      console.log("Error is ");
      console.log(error);
    })
}

function postStudentData() {
  console.log("posting student's data");

  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");

  console.log("firstName ki tag", firstName);
  console.log("lastName ki tag", lastName);
  console.log("email ki tag", email);

  let firstNameVal = firstName.value;
  let lastNameVal = lastName.value;
  let emailVal = email.value;

  let postObj = {
    "Name": firstNameVal,
    "LastName": lastNameVal,
    "Email": emailVal
  }

  console.log("postObj is ", postObj);

  axios.post(url, postObj)
    .then((responseOfPost) => {
      console.log(responseOfPost);
    })
    .catch((postError) => {
      console.log(postError);
    })

}



