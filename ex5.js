var fs = require("fs");
var path = require("path");

fs.readdir(process.argv[2], function(err, list) {
  if (err) throw err;

  extn = "." + process.argv[3];
  for (var i = 0; i < list.length; ++i) {
    if (path.extname(list[i]) === extn) {
      console.log(list[i]);
    }
  }
});
