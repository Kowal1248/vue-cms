var mongoose = require('mongoose'),
    Users = mongoose.model('Users');


exports.get_Users = function(req, res) {
    Users.find({}, function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.save_Users = function(req, res) {
    var data = new Users(req.body);
    data.save(function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
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
