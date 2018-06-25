
exports.authorize = function(req, res, next) {
  var apiToken = req.headers['x-auth'];
  console.log(apiToken);
  if(!apiToken){
    res.redirect('/dupa');

  } else {
    next();
  }

}
