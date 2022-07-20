// this file contains the game logic. from where the shapes are built to how they appare
window.addEventListener("load", function () {
  //   sessionStorage.getItem("username");
  //   console.log(sessionStorage.getItem("username"));
  //   console.log(sessionStorage.getItem("color"));
  this.document.getElementById("welcome").innerText =
    "Welcome " + sessionStorage.getItem("username");
  var start = new Date().getTime();
  //function to get color from the sessionStorage
  function getColor() {
    var color = sessionStorage.getItem("color");
    return color;
  }

  var index = 1; //index to keep track of the shapes click
  var average = 0; //average to keep track of the time taken to click the shapes

  function shapeMaker() {
    //function to make the shapes
    if (index <= 5) {
      //if the index is less than 5 then make the shapes
      var top = Math.random() * 300; //random number to make the shapes appear at different places

      var left = Math.random() * 300; //random number to make the shapes appear at different places

      var width = Math.random() * 200 + 100; //random number to make the shapes appear at different sizes

      if (Math.random() > 0.5) {
        //if the random number is greater than 0.5 then make the shapes radius to 50%;
        document.getElementById("shape").style.borderRadius = "50%";
      } else {
        document.getElementById("shape").style.borderRadius = "0";
      }

      document.getElementById("shape").style.backgroundColor = getColor(); //get the color from the getcolor function

      document.getElementById("shape").style.width = width + "px"; //set the width of the shape

      document.getElementById("shape").style.height = width + "px"; //set the height of the shape

      document.getElementById("shape").style.top = top + "px"; //set the top of the shape

      document.getElementById("shape").style.left = left + "px"; //set the left of the shape

      document.getElementById("shape").style.display = "block"; //make the shape visible

      start = new Date().getTime(); //start the timer
    } else {
      document.getElementById("shape").style.display = "none";
      location.href = "gameover.html";
    }
  }

  function delayShape() {
    //function to delay the shape appearance
    setTimeout(shapeMaker, Math.random() * 200);
  }

  delayShape();

  document.getElementById("shape").onclick = function () {
    //when the shape is clicked the timer is stopped and the time taken is added to the average
    console.log(index);
    document.getElementById("shape").style.display = "none";

    var end = new Date().getTime();

    var timeTaken = (end - start) / 1000;

    document.getElementById("timeTaken").innerHTML = timeTaken + " seconds";
    average += timeTaken;
    sessionStorage.setItem("average", average);
    index++;
    delayShape();
  };
});
