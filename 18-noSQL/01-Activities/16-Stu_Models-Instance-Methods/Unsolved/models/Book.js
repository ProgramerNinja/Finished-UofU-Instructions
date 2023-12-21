const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: false },
    price: Number
  });
// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
    const discountedPrice = this.price * 0.5;
    console.log(`This book's title is ${this.title} and the discounted price is ${discountedPrice}`);
}
// TODO: Create a model named `Book`
const handleError = (err) => console.error(err);
const Book = mongoose.model('Book', bookSchema);
// TODO: Create a new instance of the model
Book
  .create({
    title: 'Oh the Places You Will Go!',
    author: 'Dr. Seuss'
  })
  .then(result => console.log('Created new document', result))
  .catch(err => handleError(err));

//   const discountedBook = new bookSchema({
//     title: "Cat that gets pat",
//     price: 24,
//   })

const discountedBook = Book
.create({
  title: 'Oh the Places You Will Go!',
  author: 'Dr. Seuss'
});  

// TODO: Call the custom instance method on the instance
discountedBook.methods.getDiscount();

module.exports = Book;
