const models = require('../models');
  // return a list of all users if the provided JWT token is valid
  // getUsers = function that returns response consisting of users
const getUsers = (req, res) => {
  // find all users, and if no error return users in http response
  models.User.find({}, (err, users) => {
    if (err) return res.send(err);
    res.send(users);
  });
};

module.exports = (app) => {
  app.get('/users', getUsers);
};
