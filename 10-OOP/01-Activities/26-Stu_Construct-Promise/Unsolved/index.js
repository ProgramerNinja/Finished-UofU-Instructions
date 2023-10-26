const http = require('http');

// TODO: What does this function return?
// at a high level, this function creates a promise function to pull data from the passed url value and then parses/analyses it. it then returns that that either passed or failed with accompanied data.
const asyncRequest = (url) =>
  new Promise((resolve, reject) => {
    let error;
    let rawData = '';

    // Use the http.get method to send an asynchronous request to an api at the given url.
    http
      .get(url, (res) => {
        // Check for an error code (not equal to 200)
        if (res.statusCode !== 200) {
          // Creates an error object representing the failed http request
          error = new Error(`Request Failed.\nStatus Code: ${res.statusCode}`);
          res.resume();
          return;
        }

        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          rawData += chunk;
        });
      })
      .on('error', (e) => {
        reject(e);
      })
      .on('close', () => {
        // The 'close' event fires after the incoming message is completely received. Error will be undefined if the
        // response status code was 200.
        if (error) {
          // TODO: What the following line do?
          //sees if there is an error and returns the value in the parenthasis
          reject(error);
        } else {
          // TODO: What does the following line do?
          //sees that there was no errors and then returns the value inside of the parenthasis
          resolve(rawData);
        }
      });
  });

asyncRequest('http://numbersapi.com/random/trivia')
  // TODO: When is the callback function passed to .then() called by the promise?
  //the .then is called when the previous function either finishes running all of it's code or is ended by a resolve(), then console logs the returned data
  .then((data) => console.log(data))
  // TODO: When is the callback function passed to .catch() called by the promise?
  // the .catch only runs if the promise function is ended by the reject() function, then console logs the returned error
  .catch((error) => console.log(error));
