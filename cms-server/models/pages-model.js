var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pagesSchema = new Schema({
  update: {type: Date, default:Date.now },
  seo: {},
  website: {},
  author:{
    firstName:String,
    lastName:String,
    id: String
  },
  status: String

});


module.exports = mongoose.model('pages', pagesSchema);
