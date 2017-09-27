const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Client Assessment Tool'});
});

/* GET fences page. */
router.get('/fences', function(req, res, next) {
  res.render('fences', { title: 'Issue Type: Fences'});
});

module.exports = router;
