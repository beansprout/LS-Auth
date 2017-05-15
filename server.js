// import packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// by default query methods return a promise
// promise means in background something can wait for the response while the rest of the program keeps on chigging
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/auth');

// app always refers to the express object
const app = express();
app.use(bodyParser.json());
// import ./controllers folder i.e. index.js immediately run with express
require('./controllers')(app);

app.listen(5000, (req, res) => {
  console.log('server listening on port 5000');
});
