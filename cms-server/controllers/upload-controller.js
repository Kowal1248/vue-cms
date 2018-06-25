var mongoose = require('mongoose'),
  Upload = mongoose.model('Upload');

var fs = require('fs');

var Gridfs = require('gridfs-stream');

exports.upload_file = function(req, res) {

  var db = mongoose.connection.db;
  var mongoDriver = mongoose.mongo;
  var gfs = new Gridfs(db, mongoDriver);
  console.log(req.files);
  var writestream = gfs.createWriteStream({
    filename: req.files.file.name,
    mode: 'w',
    content_type: req.files.file.mimetype,
    metadata: req.body
  });
  fs.createReadStream(req.files.file.path).pipe(writestream);
  writestream.on('close', function(file,err) {
    if(!err){
          var data = new Upload({media: writestream.id});
          data.save(function(err, task11) {
              if (err)
                  res.send(err);
                  return res.json(200, writestream.id)
            });
    }
    else {
      return res.json(400, err)

    }

  })

}

exports.download_file = function(req, res) {
  var db = mongoose.connection.db;
  var mongoDriver = mongoose.mongo;
  var gfs = new Gridfs(db, mongoDriver);

if(req.params.id != undefined){
    var readstream = gfs.createReadStream({
      _id: req.params.id
    });


  readstream.on('error', function(error) {
    console.log("Caught", error);
  });
  readstream.on('readable', function() {
    readstream.pipe(res)
  });
}
}

exports.get_files = function(req, res) {
  Upload.find({}, function(err, task11) {
      if (err)
          res.send(err);
      res.json(task11);
  });
}

exports.delete_file = function(req, res) {
  var db = mongoose.connection.db;
  var mongoDriver = mongoose.mongo;
  var gfs = new Gridfs(db, mongoDriver);

  console.log(req.params.id);
  gfs.remove({_id: req.params.id}, err => {
      if(err){
        res.send(err);
      } else {
        Upload.remove({
            media: req.params.id
        }, function(err, task11) {
            if (err)
                res.send(err);
            res.json({
                message: 'media delete'
            });
        });
      }
  });


}
