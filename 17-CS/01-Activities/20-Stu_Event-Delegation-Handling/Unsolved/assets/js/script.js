const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
// TODO: Add a comment describing the purpose of this variable.
// defines a new variable named count and setting its type as a number. specifically 0
  let count = 0;

  // TODO: Add a comment describing what is happening. 
  //we are creating a function in the return of the parent function to encapsulate the data and keep it from being accessable from outside the function
  return function () {
  
   // TODO: Add a comment describing how this variable is being scoped. 
   // this count will stay as a private variable that cannot be called on outside of the return
    count++;
   // TODO: Add a comment describing how we are using the 'count' variable.
   //sets the text content of the element that had the clickHandler called on it to the value of the priivate variable for that instance
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
// Adds the .addEventListener to every object collected by .getElementsByTagName and assigns the clickHandler() to the response of the action
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
