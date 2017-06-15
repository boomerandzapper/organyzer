const express = require('express');
const router = express.Router();

module.exports = (knex, passport) => {

  //GET Login Page
  router.get('/', function(req, res) {
    res.render('login');
  });
  //Post Login ***
  router.post('/login',
    passport.authenticate('local', { successRedirect: '/',
                                     failureRedirect: '/login',
                                     failureFlash: true })
  );
  return router;
};
