var express = require('express'),
  app = express(),
  port = process.env.PORT || 8000,
  mongoose = require('mongoose'),
  Task = require('./models/settings-model')
  Task1 = require('./models/pages-model')
  Task2 = require('./models/upload-model')
  Task3 = require('./models/users-model')

  path = require("path"),

  bodyParser = require('body-parser');
var http = require('http')
var multer = require('multer')
var http = require('http'),
  fs = require('fs');
var Gridfs = require('gridfs-stream');
var multer = require('multer')
const cors = require('cors');

app.use(cors())

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cms');


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.use('/css', express.static(path.join(__dirname, '../cms/dist/css/')));
app.use('/js', express.static(path.join(__dirname, '../cms/dist/js/')));
app.use('/img', express.static(path.join(__dirname, '../cms/dist/img/')));
app.use('/fonts', express.static(path.join(__dirname, '../cms/dist/fonts/')));

var routes = require('./router');

routes(app);

app.listen(port);


console.log('Server start: ' + port);
