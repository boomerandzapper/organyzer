const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  //GET Landing Page
  router.get('/', function(req, res) {
    res.render('index');
  });
  //GET FAQ Page
  router.get('/faq', function(req, res) {
    res.render('faq');
  });
  //GET About Page
  router.get('/about', function(req, res) {
    res.render('about');
  });
  return router;
};


