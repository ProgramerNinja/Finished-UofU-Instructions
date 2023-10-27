const express = require('express');
// Helper function to sort our data in ascending and descending order
const { sortData } = require('./sortData');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

const sortHelper = (type) =>
  termData.sort(sortData('term', 'relevance', `${type}`));

// TODO: Add a comment describing the functionality of this route
//get route that gathers all of the terms from the json file
app.get('/api/terms/', (req, res) => {
  // TODO: Add a comment describing the req.query object
  //takes the request data keys length and checks if there is any keys then applies the value, true or false to the variable hasQuery
  //Checking to see if there is a query parameter
  const hasQuery = Object.keys(req.query).length > 0;
  //if there is a query parameter, then it will pass it to the if functions, if not it will return the data as is

  //sorts asending if query.sort ===asc
  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
  }
  //sorts desending if query.sort ===dsc
  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
  }

  // If there is no query parameter, return terms
  return res.json(termData);
});

// TODO: Add a comment describing what this route will return
//it will return the data from /api/terms with the term key 'term'
app.get('/api/term/:term', (req, res) => {
  // TODO: Add a comment describing the content of req.params in this instance
  //looks for the term that was requested in the query
  const requestedTerm = req.params.term.toLowerCase();
//will return the term that matches the term key in requestedterm
  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No term found');
});

// TODO: Add a comment describing what this route will return
//will return all the terms in a specific catagory
app.get('/api/terms/:category', (req, res) => {
  const requestedCategory = req.params.category.toLowerCase();
  const result = [];

  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;
    if (requestedCategory === currentTermCategory) {
      result.push(termData[i]);
    }
  }
  return res.json(result);
});

// TODO: Add a comment describing what this route will return
//builds an array with all of the categories
app.get('/api/categories', (req, res) => {
  const categories = termData.map((term) => term.category);

  const result = categories.filter((cat, i) => categories.indexOf(cat) === i);

  return res.json(result);
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);
