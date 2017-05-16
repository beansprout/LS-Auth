// import models
const models = require('../models');
const getTokenForUser = require('../services/token');

  // create a new user and return a valid JWT token to the client
const signUp = (req, res) => {
  // user = new user based on model user prototype/class/model + client input client
  // req.body is the client input
  // tell me if there's an error
  // if no error then send to DB (and add in that user)
  const user = new models.User(req.body);
  user.save((err, user) => {
    if (err) return res.send(err);
    res.send(getTokenForUser(user));
  });
};

  // generate a JWT token if the username/password is valid
const signIn = (req, res) => {

};

module.exports = (app) => {
  app.post('/signup', signUp);
  // app.post('/signin', signIn);
};
