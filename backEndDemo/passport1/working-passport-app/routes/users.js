var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('route to the view template');
  res.render('users', {message: 'User Only page'});
});

router.post('/login', function (req, res) {
  console.log('login route');
  res.redirect('/users');
});

module.exports = router;
