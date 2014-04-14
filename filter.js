var fs = require("fs");
var path = require("path");

module.exports = function(directory, extension, callback) {
  fs.readdir(directory, function(err, list) {
    if (err) {
      return callback(err);
    }
    var result = [];
    extension = '.' + extension;
    list.forEach(function(file) {
      if (path.extname(file) === extension) {
        result.push(file);
      }
    });
    callback(null, result);
  });
}



