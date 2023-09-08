var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  

  // TODO: Complete function
  if(element.matches(".box")){
    dataState = element.getAttribute("data-state");
    console.log(dataState);
    if (dataState == "hidden") {
      element.setAttribute("data-state", "visible");
      element.textContent = element.dataset.number
      console.log(element);
    } else if (dataState == "visible") {
      element.setAttribute("data-state", "hidden");
      element.textContent = "";
      console.log(element);
    }
  }
});
