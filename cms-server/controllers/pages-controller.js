var mongoose = require('mongoose'),
    pages = mongoose.model('pages');


exports.get_pages = function(req, res) {
    pages.find({}, function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.save_pages = function(req, res) {
    var data = new pages(req.body);
    data.save(function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.read_pages = function(req, res) {
    pages.findById(req.params.id, function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.update_pages = function(req, res) {
    pages.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    }, function(err, task11) {
        if (err)
            res.send(err);
        res.json(task11);
    });
};


exports.delete_pages = function(req, res) {
    pages.remove({
        _id: req.params.id
    }, function(err, task11) {
        if (err)
            res.send(err);
        res.json({
            message: 'pages delete'
        });
    });
};
