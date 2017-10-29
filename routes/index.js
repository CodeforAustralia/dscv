const express = require('express');
const request = require('request');
const router = express.Router();

var formio = "";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Client Assessment Tool'});
});

/* GET fences page. */
router.get('/fences', function(req, res, next) {
  res.render('issue', { title: 'Issue Type: Fences', formio_form: 'https://cqaclfkfwhksaeu.form.io/fencing'});

});

/* GET trees page. */
router.get('/trees', function(req, res, next) {
  res.render('issue', { title: 'Issue Type: Trees'});
});

/* GET behaviour page. */
router.get('/behaviour', function(req, res, next) {
  res.render('issue', { title: 'Issue Type: Behaviour'});
});

/* GET psio page. */
router.get('/psio', function(req, res, next) {
  res.render('issue', { title: 'Issue Type: Police Safety Intervention Order'});
});

/* GET incorporated associations page. */
router.get('/incorp', function(req, res, next) {
  res.render('issue', { title: 'Issue Type: Police Safety Intervention Order'});
});

module.exports = router;
