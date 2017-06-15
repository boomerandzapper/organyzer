const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  //GET Settings ***
  router.get('/', function(req, res) {
    res.render('settings');
  });

  //Post Settings ***
  router.post('/', function(req, res) {

  });
  return router;
};