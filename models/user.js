const mongoose = require('mongoose');
// import bcrypt
const bcrypt = require('bcrypt-nodejs');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
    validate: {
      validator: email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email),
    },
  },
  password: {
    type: String,
    required: true,
  },
});

  // this is where we will hash the user's password

// When asked to save (a password), first do the following (that's the 'pre' save)
UserSchema.pre('save', function (next) {
  bcrypt.genSalt(10, (err, salt) => {
    // (2)hash ((1)the 10 x salted password) if it didn't have any errors in it...
    bcrypt.hash(this.password, salt, null, (err, hash) => {
      if (err) return next(err);
      console.log(' next: ', next);
      this.password = hash;
      // and ^^^ replace the password with this hashed and salted password
      next();
    });
  });
});

UserSchema.methods.checkPassword = function (potentialPassword, cb) {
  // use bcrypt to compare the potentialPassword with the user's password
};

module.exports = UserSchema;
