// 000863115, Kirtankumar patel. This is the js code that stores the user input and color in the sessionStorage to be used later on.

var userInput;
var color;

function getUserInput() {
  userInput = document.getElementById("username").value; //get the value of the input
  color = document.getElementById("color").value; //get the value of the input
  var username = userInput; //set the value of the input to the variable
  sessionStorage.setItem("username", username); //set the value of the variable to the sessionStorage
  var userColor = color; //set the value of the input to the variable
  sessionStorage.setItem("color", userColor); //set the value of the variable to the sessionStorage
  console.log(userInput); //for test purposes
  console.log(color); //for test purposes
  location.href = "index2.html"; //go to the next page
  return false;
}
