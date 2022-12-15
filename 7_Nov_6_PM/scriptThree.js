//grandpa function
function giftWrapperColor() {

  var wrapperColor = "green";

  //parent function
  function giftBoxColor() {

    var boxColor = "Yellow";

    //child function
    function giftColor() {

      var giftColorValue = "red";

      console.log("The color of my giftWrapper is ", wrapperColor);
      console.log("The color of my giftBox is ", boxColor);
      console.log("The color of my gift is ", giftColorValue);

    }

    //return the child function giftColor
    return giftColor;
  }

  //return the parent function 
  return giftBoxColor;
}

//calling the grandpa function for storing the parent function body
var x = giftWrapperColor();

console.log(typeof (x));

//calling the parent function for storing the child function body
var y = x();

console.log(typeof (y));

//calling the child function
y();
