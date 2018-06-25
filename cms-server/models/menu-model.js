var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var menuSchema = new Schema({


    name: String,
    idPage: String,
    index: Number,
    website: {
      href: String,
      title: String
    }


});

module.exports = mongoose.model('menu', menuSchema);
