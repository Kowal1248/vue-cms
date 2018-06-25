var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var settingsSchema = new Schema({

  url: String,
  title: String,
  description: String,
  
  author:{
    firstName:String,
    lastName:String,
    id: String
  }
});


module.exports = mongoose.model('settings', settingsSchema);
