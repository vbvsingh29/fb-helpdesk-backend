const express = require('express');
const passport = require('passport');
const User = require('../models/user.model');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { email, password ,name } = req.body;
    const user = await User.register(new User({ email }), password);
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.send('Logged out successfully');
});

module.exports = router;
