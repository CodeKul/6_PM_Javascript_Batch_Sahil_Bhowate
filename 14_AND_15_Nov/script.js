console.log("Application of js promises");

let url = `https://jsonplaceholder.typicode.com/users`;

let contentArea = document.getElementById("contentArea");
let contentString = "";

//on the click of the button call the function getData()
//getData function send the GET request to the api , using fetch() method and promises
function getData() {
  //settlement of the promise object promiseObj
  //[1] The fetch function returns one promise object
  //[2] We take that promise object and bring it to the settlement
  //[3] We use two then blocks and one catch block
  //[4] Data travels on the world wide web in the form of string
  //[5] So , we need to convert the received response in JSON format using the json() method
  fetch(url).then((response) => {
    console.log(typeof (response));

    console.log("response obj is ");

    return (response.json());
  })
    .then((responseJson) => {
      //responseJson is a javascript object
      console.log("The data is ", responseJson);

      displayData(responseJson);
    })
    .catch((error) => {
      console.log(error);
    })
}

// email: "Sincere@april.biz"
// id: 1
// name: "Leanne Graham"
// phone: "1-770-736-8031 x56442"
// username: "Bret"
// website: "hildegard.org"

function displayData(receivedData) {
  console.log("The data to be displayed is ", receivedData);

  //applying iteration on the array recievedData
  for (singleObj of receivedData) {
    console.log(singleObj.name);

    contentString = contentString + `<div>
    <div>
    <fieldset>
    <label>email :</label>
    <span>${singleObj.email}</span>
    </fieldset>
    </div>
   
    <div>
    <fieldset>
    <label>id :</label>
    <span>${singleObj.id}</span>
    </fieldset>
    </div>

    <div>
    <fieldset>
    <label>name :</label>
    <span>${singleObj.name}</span>
    </fieldset>
    </div>

    <div>
    <fieldset>
    <label>phone :</label>
    <span>${singleObj.phone}</span>
    </fieldset>
    </div>

    <div>
    <fieldset>
    <label>username :</label>
    <span>${singleObj.username}</span>
    </fieldset>
    </div>

    <div>
    <fieldset>
    <label>website :</label>
    <span>${singleObj.website}</span>
    </fieldset>
    </div>

    </div>`

  }

  contentArea.innerHTML = contentString;
}


