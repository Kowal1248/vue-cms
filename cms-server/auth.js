var jwt = require('jwt-simple')
var config = require('./config')
module.exports = function(req, res, next) {
  if (req.headers['x-auth']) {
    try {
      req.auth = jwt.decode(req.headers['x-auth'], config.secret)
    } catch (err) {
      req.auth = null
    }


    //console.log("Auth:", req.auth.user_id)
  }
  next()
}
