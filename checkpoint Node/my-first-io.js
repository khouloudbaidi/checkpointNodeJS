const fs = require('fs');
var line = fs.readFileSync(process.argv[2]).toString().split("\n").length-1 ;
console.log(line);