var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  update: {type: Date, default:Date.now },
  name: String

});


module.exports = mongoose.model('category', categorySchema);
