var fs = require("fs");

var filepath = process.argv[2];

var contentBuffer = fs.readFileSync(filepath);
var content = contentBuffer.toString();

var contentArray = content.split('\n');
var linesCount = contentArray.length - 1;
console.log(linesCount);
