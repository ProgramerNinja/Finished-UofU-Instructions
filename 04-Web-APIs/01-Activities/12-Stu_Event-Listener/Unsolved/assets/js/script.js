var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var reset = document.querySelector("#reset")
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function() {
  count++;
  setCounterText();
});
// TODO: Add event listener to decrement button 
  decrementEl.addEventListener("click", function() {
    if(count>0) {
    count--;
    };
    setCounterText();
  });
// Resets count to 0
reset.addEventListener("click", function() {
  count = 0;
  setCounterText();
});