// 000863115, Kirtankumar patel. This is the js code that handles the gameover page.

window.addEventListener("load", function () {
  var average = this.sessionStorage.getItem("average");
  console.log(average);

  this.document.getElementById("message").innerText =
    "Wow, you are already done??? hmmm intresting " +
    sessionStorage.getItem("username"); // displays a end message to the user with thier name
  this.document.getElementById("message").style.color =
    sessionStorage.getItem("color"); // sets the message color to the user color from the sessionStorage
  var totalAve = (average / 5).toFixed(2); // calculates the average time taken to click the shapes and rounds it to 2 decimal places
  this.document.getElementById("timeTaken").innerText = totalAve + " seconds"; // displays the average time taken to click the shapes
  this.document.getElementById("howlong").innerText = totalAve + " seconds "; // displays the average time taken to click the shapes

  if (totalAve <= 0.5) {
    // if the average time taken to click the shapes is less than 0.5 seconds then display the message below
    this.document.getElementById("conclusion").innerText = "pretty good";
  } else {
    this.document.getElementById("conclusion").innerText = "bad";
  }
  this.document.getElementById("retry").onclick = function () {
    location.href = "index2.html";
  };
});
