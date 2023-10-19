const fs = require('fs');
const inquirer = require('inquirer');
fs.readFile('./template.html', 'utf8', (error, data) =>{
    error ? console.error(error) : console.log(data);
    const workable = data;
});

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your Country?',
        name: 'country',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'LinkedIn',
    },
    {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'GitHub',
    },
    {
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'languages',
        choices: [
            "HTML",
            "CSS",
            "JavaScript",
            "MySQL",
            "Python"
        ]
    },
  ])
  .then((response) => {
    fs.appendFile(`${response.name.toLowerCase().split(' ').join('')}.html`, workable, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('You got it!');
      }
    });
  });