var http = require("http");

var result = [];
var count = 0;

function printResult() {
  for (var i = 0; i < result.length; ++i) {
    console.log(result[i]);
  }
}

function getHttp(index) {
  http.get(process.argv[2 + index], function(response) {
    response.setEncoding("utf8");
    var content = "";
    response.on("data", function(data) {
      content += data;
    });
    response.on("end", function() {
      result[index] = content;
      count += 1;
      if (count == 3) {
        printResult();
      }
    });
  });
}

for (var i = 0; i < 3; ++i) {
  getHttp(i);
}
