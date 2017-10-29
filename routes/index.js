const express = require('express');
const request = require('request');
const router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Client Assessment Tool'});
});

/* GET fences page. */
router.get('/fences', function(req, res, next) {
  res.render('fences', { title: 'Issue Type: Fences'});
});

/* GET trees page. */
router.get('/trees', function(req, res, next) {
  res.render('trees', { title: 'Issue Type: Trees'});
});

/* GET behaviour page. */
router.get('/behaviour', function(req, res, next) {
  res.render('behaviour', { title: 'Issue Type: Behaviour'});
});

/* GET psio page. */
router.get('/psio', function(req, res, next) {
  res.render('psio', { title: 'Issue Type: Police Safety Intervention Order'});
});

/* GET incorporated associations page. */
router.get('/incorp', function(req, res, next) {
  res.render('incorp', { title: 'Issue Type: Police Safety Intervention Order'});
});

module.exports = router;
