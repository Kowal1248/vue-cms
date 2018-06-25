var mongoose = require('mongoose'),
    settings = mongoose.model('settings');

exports.get_settings = function(req, res) {
    settings.find({}, function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.save_settings = function(req, res) {
    var data = new settings(req.body);
    data.save(function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.read_settings = function(req, res) {
    settings.findById(req.params.id, function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.update_settings = function(req, res) {
    settings.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    }, function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.delete_settings = function(req, res) {
    settings.remove({
        _id: req.params.id
    }, function(err, task11) {
        if (err)
            res.send(err);
        res.json({
            message: 'settings delete'
        });
    });
};
