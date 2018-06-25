var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var menuSchema = new Schema({
  update: {type: Date, default:Date.now },


    name: String,
    idPage: String,
    index: Number,
    website: {
      href: String,
      title: String
    }


});

module.exports = mongoose.model('menu', menuSchema);
