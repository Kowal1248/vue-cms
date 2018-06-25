var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  firstName: String,
  lastName: String,
  alias: String,
  email: String,
  password: String,
  permission: String
});

module.exports = mongoose.model('Users', UsersSchema);
