const passport = require('passport');
const session = require('express-session');
const User = require('../models/user.model');

module.exports = function (app) {
  app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(User.createStrategy());
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
};
