var express = require('express');
var basicAuth = require('basic-auth');
var router = express.Router();

router.use(function (req, res, next){
  var user = basicAuth(req);
   if(!user || user.name !== '' || user.pass !== 'password'){
     res.set('www.Authenticate', 'Basic rel=Who are you?');
     return res.send(401);
   }
    req.session.user = user;
    next();
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/tweets', function (req, res, next){
    req.session.tweets = req.session.tweets || {};
    req.session.tweets[req.session.user.name] = req.session.tweets[req.session.user.name] || [];

    req.session.tweets[req.session.user.name].push('something');

    res.end();
});

router.get('/tweets', function(req, res, next){
    res.send(JSON.stringify(req.session.tweets[req.session.user.name]));
});

module.exports = router;
