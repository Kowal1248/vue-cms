var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pagesSchema = new Schema({

  seo: {},
  website: {},
  author:{
    firstName:String,
    lastName:String,
    id: String
  }
  
});


module.exports = mongoose.model('pages', pagesSchema);
