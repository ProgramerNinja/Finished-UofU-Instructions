var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
//resets inner html for multiple elemetns and then fills them with items stored in todos array
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  //Resets innerhtml of todolist and todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  //fills in a list item with data in the array for each item
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// Starts the page and all code needed when the site starts
function init() {
  // TODO: What is the purpose of the following line of code?
  //takes data from local storage and stores it in a variable
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  //if there was data in local storage , it storees that data in a different variable
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  //calls the renderTodos
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  //sets todos to local storage
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
//runs the code when the button is clicked
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  //if the todoText variable is empty, exit thje function
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
 //adds todoText to the todos array
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  //it will store the todos to local storage and rendering the data to the page
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  //checks that the button on the target element was clicked and then removesd it from the array
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    //it will store the todos to local storage and rendering the data to the page
    storeTodos();
    renderTodos();
  }
});

init();
