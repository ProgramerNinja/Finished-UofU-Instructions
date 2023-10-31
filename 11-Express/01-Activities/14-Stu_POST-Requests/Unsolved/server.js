const express = require('express');

const PORT = 3001;

const app = express();


// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  // Your code here
  res.json(`${req.method} for reviews has been recieved`)
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app.post('/api/reviews', (req, res) => {
  res.json(`${req.method} for reviews has been recieved`)
});

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  // Your code here
  res.json(`${req.method} for upvotes has been recieved`)
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
// Your code here
app.post('/api/upvotes', (req, res) => {
  res.json(`${req.method} for upvotes has been recieved`)
})

app.get('/', (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
  );
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
