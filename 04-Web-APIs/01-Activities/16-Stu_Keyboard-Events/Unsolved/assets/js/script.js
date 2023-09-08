var keyPressed = document.querySelector("#key")
var keyPressed = document.querySelector("#code")
var keyPressed = document.querySelector("#status")

function keydownAction(event) {
  // TODO: Complete keydown function
  console.log(event);
  document.querySelector("#key").innerHTML = event.key;
  document.querySelector("#code").innerHTML = event.keyCode;
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

