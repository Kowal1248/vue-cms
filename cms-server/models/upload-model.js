var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var uploadSchema = new Schema({
  media: String
});

module.exports = mongoose.model('Upload', uploadSchema);
