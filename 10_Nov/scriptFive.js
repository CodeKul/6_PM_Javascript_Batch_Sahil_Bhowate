let btn = document.getElementById("btn-for-callback");

//the anonymous event listener function was passed as an argument to addEventListener function
//Our anonymous function is a callback function
btn.addEventListener("click", function () {

  console.log("The button has been clicked");

});