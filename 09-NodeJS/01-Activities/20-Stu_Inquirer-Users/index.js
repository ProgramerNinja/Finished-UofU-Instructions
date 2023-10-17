const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
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
    {
      type: 'List',
      message: 'What is your preferred method of communication?',
      name: 'method',
      choices: [
        "Email",
        "Call",
        "Text",
        "Telepathy"
      ]
    },
  ])
  .then((response) => {
    fs.appendFile(`${response.name.toLowerCase().split(' ').join('')}.json`, JSON.stringify(response, null, '\t'), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('You got it!');
      }
    });
  });