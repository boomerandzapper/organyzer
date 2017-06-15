const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  //GET Manage Page
  router.get('/', function(req, res) {
    res.render('manage');
  });

  //Post Manage Page ***
  router.post('/create', function(req, res) {

  });

  //Get Manage Team Page ***
  router.get('/:team_id', function(req, res) {

  });

  //Edit Team ***
  router.post('/:team_id', function(req, res) {

  });

  //Edit Event ***
  router.post('/:team_id/:event_id', function(req, res) {

  });

  return router;
};