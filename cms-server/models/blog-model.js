var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({

  update: {type: Date, default:Date.now },
  seo: {},
  website: {},
  category: {
    _id: String,
    name: String
  },
  author:{
    firstName:String,
    lastName:String,
    id: String
  },
  status: String

});


module.exports = mongoose.model('blog', blogSchema);
