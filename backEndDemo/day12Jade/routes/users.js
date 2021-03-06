var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    users: req.session.users
    // users: [
    //   {name: 'TY', age: 21},
    //   {name: 'Bob', age: 32},
    //   {name: 'Tom', age: 56},
    //   {name: 'Jay', age: 36}
    // ]
  })
});

router.get('/create', function(req, res, next) {
  res.render('create-user')
});

router.post('/create', function (req, res, next) {
  var user ={
    name: req.body.name,
    email: req.body.email
  };

  req.session.users.push(user);
  res.redirect('/users')
});

router.post('/delete/:name', function(req, res, next) {
  for (var i = 0; i < req.session.users.length; i++)
        var user = req.session.users[i];
        if (user.name === req.params.name){
          req.session.users.splice(i,1);
          break;
    }
  }
  res.redirect('/users')

});


module.exports = router;
