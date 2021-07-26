const mymodule = require('./mymodule.js');
var dir = process.argv[2];
var mymodules = process.argv[3];
mymodule(dir , mymodules , function(err, elt) {
    if (err){
        return console.log("There was an error:", err);
    }
    elt.forEach( function(file) {
        console.log(file);
    });

});