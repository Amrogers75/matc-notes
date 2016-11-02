var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;

var router = express.Router();


/* GET users listing. */
router.get('/', userAuthenicated, function(req, res, next) {
  res.render('/', {message: 'User Only Page'});
});

function userAuthenicated(req, res, next) {
    if(req.isAuthenticated()){
        console.log('Oh Goody');
        return next();
    }
    else{
        res.redirect('/')
    }
}

router.post('/login',
    passport.authenticate('local',{}),
    function (req, res, next) {
    console.log('login rout');
    res.redirect('/users');
});

router.get('logout', function (req, res, next) {
    req.logout();
    console.log('user logout');
    res.redirect('/')
});

var User = ['bill', 'ted'];

passport.use(new Strategy(
    function(username,password,done) {
        if (User.indexOf(username) === -1) {
            console.log('user not found');
            return done(null, false, {message: 'incorrect username'});
        }
        else {
            var i = User.indexOf(username);
            console.log('user found');
            return done(null, User[i]);
        }
    }

));

module.exports = router;
