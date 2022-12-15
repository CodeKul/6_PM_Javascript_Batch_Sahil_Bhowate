//function context
function show() {

  console.log("The value of this keyword is ", this);

  console.log(this === window);

}

// show();

window.show();