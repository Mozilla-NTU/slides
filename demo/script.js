document.addEventListener("DOMContentLoaded", function () {
  var hello = document.getElementById("hello");
  var button = document.getElementById("myButton");

  hello.style.fontSize = "100px";

  var closedOverCounter = 0;

  function whenClicked (event) {
    console.log("Hey I was clicked " + ++closedOverCounter +
                " time[s]");
    hello.classList.toggle("valid");
  };

  button.addEventListener("click", whenClicked);
});

