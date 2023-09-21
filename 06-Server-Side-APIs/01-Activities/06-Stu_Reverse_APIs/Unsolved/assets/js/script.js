var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
//This uses the jquery library to make an apicall. it requests data using the url key and uses the method get to do so.
//once the data is returned the .then() runs calls the data and prints it to console. jquery will automatically parse it prior to printing
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
//fetch uses the url back it parses it with the .json() and then prints to console
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
// this is the older method to get data from servers only rally used i IE. first part builds the instance of XMLhttprequest
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  //once it is in the ready state, it runs the function
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};

//how to initialize the request
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
