const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: Number
});

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  books: [bookSchema],
  //
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = mongoose.model('Library', librarySchema);

// TODO: Create a new instance of the model including the subdocuments
const libraryData = { title: 'Math text book', price: 80 };
const bookData = [
  { title: 'Physics text book', price: 40 },
  { title: 'English text book', price: 50 },
];

Library
  .create({ name: 'Shmoes Stories', library: libraryData, books: bookData })
  .then(data => console.log(data))
  .catch(err => console.error(err));

module.exports = Library;
