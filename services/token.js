/* Export a function that generates the JWT token based off of the user.id */
// need jwt (json web token) to encode and decode tokens
// need config file (NOT included in any public space/ source code) to encode token with extra special somepin somepin to thwart the bad guys.
const jwt = require('jwt-simple');
const config = require('../config');

// the following is used during the signup to create the encoding on the password the user wants to use.
// sub = subject, purpose is to create unique identifier - i.e. which user?
// iat = initialized at time i.e timestamped

// what it means:
// function that takes in a user as a parameter, and returns an encoded token that contains the user id, the date and time of their signup, and the reference to the method for decoding (the secret) without giving away the secret
module.exports = (user) => {
  return jwt.encode({
    sub: user.id,
    iat: new Date().getTime(),
  }, config.secret);
};
