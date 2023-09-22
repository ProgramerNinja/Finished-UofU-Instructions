var badRequestUrl = 'https://api.github.com/orgs/nodejs/erpos?per_page=5';
var requestedUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      // Check the console first to see the response.status
      console.log(response.status);
      // Then write the conditional based on that response.status value
      if (399 < response.status && response.status < 500) {
        console.log("The requested URL is either bad or down")
        // Make sure to display the response on the page
        responseText.textContent = ("The requested URL is either bad or down");
      } else if (199 < response.status && response.status < 300) {
        console.log("You are good to go!")
        // Make sure to display the response on the page
        responseText.textContent = ("You are good to go!");
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(badRequestUrl);




getApi(requestedUrl);