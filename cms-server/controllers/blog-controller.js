var mongoose = require('mongoose'),
    blog = mongoose.model('blog');


exports.get_blog = function(req, res) {
    blog.find({}, function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.save_blog = function(req, res) {
    var data = new blog(req.body);
    data.author = {
      firstName: req.auth.firstName,
      lastName: req.auth.lastName,
      id: req.auth.id
    }
    data.save(function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.read_blog = function(req, res) {
    blog.findById(req.params.id, function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.update_blog = function(req, res) {
  req.body['author'] = {
    firstName: req.auth.firstName,
    lastName: req.auth.lastName,
    id: req.auth.id
  }
    blog.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    }, function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.delete_blog = function(req, res) {
    blog.remove({
        _id: req.params.id
    }, function(err, task11) {
        if (err)
            res.send(err);
        res.json({
            message: 'blog delete'
        });
    });
};
