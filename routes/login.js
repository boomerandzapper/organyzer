const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  //GET Login Page
  router.get('/', function(req, res) {
    res.render('index');
  });
  //GET FAQ Page ***
  router.post('/faq', function(req, res) {
    res.render('faq');
  });
  return router;
};
