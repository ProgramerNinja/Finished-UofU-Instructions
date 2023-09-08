// TODO: Which element is the following line of code selecting?
var carousel = document.querySelector(".carouselbox");
//taking the div element with the calss div and storing it in class carousel
// TODO: Which element is the following line of code selecting?
//storing the button elements with a class of nect and prev in variables
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/id/10/300/200",
  "https://picsum.photos/id/20/300/201",
  "https://picsum.photos/id/30/300/202",
  "https://picsum.photos/id/47/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
//adds a listener for when the div is clicked and will open a tab with jsut the image
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
//adds event listener for a click and will run vavigate();
next.addEventListener("click", function(event) {
// TODO: What is the purpose of the following line of code?
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// TODO: What is the purpose of the following line of code?
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    //stop propagation will prevent activating parent event listeners
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
