var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* GET login page. */
router.get('/login', function(req, res) {
           res.render('login');
           });

/* GET home page. */
router.get('/home', function(req, res) {
           res.render('home');
           });



module.exports = router;
