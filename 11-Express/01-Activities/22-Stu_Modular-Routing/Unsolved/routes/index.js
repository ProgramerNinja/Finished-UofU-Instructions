// TODO: Import express
const express = require('express');

// TODO: Import modules for tips/feedback
const feedbackRouter = require('./feedback');
const tipsRouter = require('./tips');

// TODO: Create app variable to create an instance of express()
const app = express();

// TODO: Use our routes
app.use('/feedback', feedbackRouter);
app.use('/tips', tipsRouter);

// TODO: Export app
module.exports = app;