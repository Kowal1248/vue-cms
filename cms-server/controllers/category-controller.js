var mongoose = require('mongoose'),
    category = mongoose.model('category');


exports.get_category = function(req, res) {
    category.find({}, function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.save_category = function(req, res) {
    var data = new category(req.body);
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


exports.read_category = function(req, res) {
    category.findById(req.params.id, function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.update_category = function(req, res) {
  req.body['author'] = {
    firstName: req.auth.firstName,
    lastName: req.auth.lastName,
    id: req.auth.id
  }
    category.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    }, function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.delete_category = function(req, res) {
    category.remove({
        _id: req.params.id
    }, function(err, task11) {
        if (err)
            res.send(err);
        res.json({
            message: 'category delete'
        });
    });
};
