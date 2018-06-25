var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var uploadSchema = new Schema({
  update: {type: Date, default:Date.now },

  media: String
});

module.exports = mongoose.model('Upload', uploadSchema);
