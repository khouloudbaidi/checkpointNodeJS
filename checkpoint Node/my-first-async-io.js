const fs = require("fs");
fs.readFile(process.argv[2], function(err, elts){
    var line = elts.toString().split("\n").length-1;
    console.log(line);
})