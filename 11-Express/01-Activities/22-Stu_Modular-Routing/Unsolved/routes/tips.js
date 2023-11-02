const tips = require('express').Router();
// TODO: Import helper functions and dependencies
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
// TODO: GET Route for retrieving all the tips
tips.get('/', (req, res) => {
    console.info(`${req.method} request received for tips`);
  
    readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
  });
  
// TODO: POST Route for a new UX/UI tip
tips.post('/', (req, res) => {
    console.info(`${req.method} request received to submit feedback`);
    const { username, topic, tips } = req.body;

    if (email && feedbackType && feedback) {
        // Variable for the object we will save
        const newTip = {
          username,
          topic,
          tips,
          tip_id: uuid(),
        };

        readAndAppend(newTip, './db/tips.json');

        const response = {
            status: 'success',
            body: newTip,
      };

      res.json(response);
    } else {
      res.json('Error in posting tip');
    }
})

module.exports = tips;
