const express = require('express');
const router = express.Router();




module.exports = (knex) => {

  //GET Team Overview
  router.get('/', function(req, res) {
    res.render('team_summary');
  });

  //GET Specific Team Page
  router.get('/:team_id', function(req, res) {
    res.render('team');
  });

  //GET Specific Team History Page
  router.get('/:team_id/history', function(req, res) {
    res.render('team_history');
  });

  //POST Event Status
  router.post('/:team_id/event/:event_id', function(req, res) {

  });

  //POST Leave a Team
  router.post('/:team_id/leave', function(req, res) {

  });

  return router;
};