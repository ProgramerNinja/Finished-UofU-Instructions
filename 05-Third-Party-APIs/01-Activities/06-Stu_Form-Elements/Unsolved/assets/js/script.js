var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');


// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
     event.preventDefault();

    var shoppingItem = $('input[name="shopping-input"]').val()
     console.log("Item Added: "+shoppingItem);

     if(!shoppingItem) {
        console.log("No item was entered")
        return
     }

     shoppingListEl.append('<li>'+shoppingItem+'</li>');

     $("input[name='shopping-input']").val("");

};

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handleFormSubmit);