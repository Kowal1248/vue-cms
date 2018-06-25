var mongoose = require('mongoose'),
    menu = mongoose.model('menu');

exports.get_menu = function(req, res) {
    menu.find({}, function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.save_menu = function(req, res) {
    var data = new menu(req.body);
    data.save(function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.read_menu = function(req, res) {
    menu.findById(req.params.id, function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.update_menu = function(req, res) {
    menu.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    }, function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.delete_menu = function(req, res) {
    menu.remove({
        _id: req.params.id
    }, function(err, task11) {
        if (err)
            res.send(err);
        res.json({
            message: 'menu delete'
        });
    });
};
