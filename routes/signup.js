const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  //GET Signup Page
  router.get('/', function(req, res) {
    res.render('sign_up');
  });
  //GET Team Singup Page
  router.get('/:team_id', function(req, res) {
    res.render('team_sign_up');
  });

  //Post Signup Page ***
  router.post('/', function(req, res) {

  });
  //Post Team Singup Page ***
  router.post('/:team_id', function(req, res) {

  });
  return router;
};