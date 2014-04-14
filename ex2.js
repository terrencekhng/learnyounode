var command_line = process.argv;
var sum = 0;

for (var i = 2; i < command_line.length; ++i) {
  sum += Number(command_line[i]);
}

console.log(sum);
