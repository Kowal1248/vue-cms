var mongoose = require('mongoose'),
  Users = mongoose.model('Users');

var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var secretKey = 'BCQ1mkoOdAOv26sxEOHw'


exports.generate_session = function(req, res, next) {
  Users.findOne({
      email: req.body.email
    })
    .select('password email person company')
    .exec(function(err, user) {
      if (err) {
        return next(err)
      }
      if (!user) {
        return res.send(401)
      }
      bcrypt.compare(req.body.password, user.password, function(err, valid) {
        if (err) {
          return next(err)
        }
        if (!valid) {
          return res.send(401)
        }
        console.log(user);
        var token = jwt.encode({
          email: user.email
        }, secretKey)
        res.json({token: token, email:user.email})
      })
    })
}

exports.information_User = function(req, res) {
  var token = req.headers['x-auth']
  var auth = jwt.decode(token, secretKey)
  Users.findOne({
    email: auth.email
  }, function(err, user) {
    res.json(user.email)
  })
}


exports.get_Users = function(req, res) {
  Users.find({}, function(err, task11) {
    if (err)
      res.send(err);
    res.json(task11);
  });
};


exports.save_Users = function(req, res) {
  var data = new Users(req.body);

  bcrypt.hash(data.password, 10, function(err, hash) {
    data.password = hash

    data.save(function(err, task11) {
      if (err)
        res.send(err);
      res.json(task11);
    });
  })
};


exports.read_Users = function(req, res) {
  Users.findById(req.params.id, function(err, task11) {
    if (err)
      res.send(err);
    res.json(task11);
  });
};


exports.update_Users = function(req, res) {
  Users.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {
    new: true
  }, function(err, task11) {
    if (err)
      res.send(err);
    res.json(task11);
  });
};


exports.delete_Users = function(req, res) {
  Users.remove({
    _id: req.params.id
  }, function(err, task11) {
    if (err)
      res.send(err);
    res.json({
      message: 'Users delete'
    });
  });
};
