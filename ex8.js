var http = require("http");

var content = "";
http.get(process.argv[2], function(response) {
  response.setEncoding("utf8");
  response.on("data", function(data) {
    content += data;
  });
  response.on("end", function() {
    console.log(content.length);
    console.log(content);
  });
  response.on("error", console.error);
})
