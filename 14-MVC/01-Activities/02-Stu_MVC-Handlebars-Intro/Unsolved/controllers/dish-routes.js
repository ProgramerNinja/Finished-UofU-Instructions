// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// this is the controller file, it handles the data between the view and the model
const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
//This is getting all of the data from the backend (the dishes that are on the menu in this example)
router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method
// This is the method that will build the view
  res.render('all');
});

module.exports = router;
