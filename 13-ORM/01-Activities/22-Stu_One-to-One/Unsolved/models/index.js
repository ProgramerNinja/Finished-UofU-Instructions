const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // TODO: Add a comment describing the functionality of this property
  //if the reader card is deleted, it will cascade that delete to the library
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement
// returns the stated relationship between library card and reader
// packaging the two models and exporting them as an object to inport them to where they will be used
module.exports = { Reader, LibraryCard };
