var net = require("net");

function tcpDate(port) {
  var server = net.createServer(function(socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    month = month + 1;
    if (month < 10) {
      month = "0" + month.toString();
    }
    var day = date.getDate();
    if (day < 10) {
      day = "0" + day.toString();
    }
    var hour = date.getHours();
    var minute = date.getMinutes();

    var ymd = [year, month, day];
    var hm = [hour, minute];
    var ymdStr = ymd.join("-");
    var hmStr = hm.join(":");
    var dateString = ymdStr + " " + hmStr + "\n";
    //socket.write(dateString);

    socket.end(dateString);
  });

  server.listen(port);
}

tcpDate(process.argv[2]);
