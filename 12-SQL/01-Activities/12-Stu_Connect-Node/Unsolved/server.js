//importing express
const express = require('express');
//importing mysql
const mysql = require('mysql2');

//Assigning the port
const PORT = process.env.PORT || 3001;
//creating an instance of express
const app = express();

//enables express to parse the url
app.use(express.urlencoded({ extended: false }));
//enables express to use json
app.use(express.json());

//adding a connection to the mysql server
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

// pulling all data from students list
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

//If it fails to pull data it will set a 404 error
app.use((req, res) => {
  res.status(404).end();
});

//sets port with previouly assigned variable
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
