var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();
const config = require('./config');

let jsonstring;
var date = new Date();

app.use(express.static('view'));
app.use('/scripts', express.static(__dirname + '/node_modules/angular/'));
app.use('/out', express.static(__dirname + '/out/'));

var server = app.listen(config.app.port, function () {
    console.log('INFO: Server started at ' + date + " on port " + config.app.port);
});


// Reading Jobs from file
fs.readFile('out/squeue_text', 'utf8', (err, data) => {
    if (err) throw err;

    var header = data.split('\n');
    var jobs = header[0].split(',');
    var result = [ ];

    // Reading data from the 2nd row
    for (var i = 1; i < (header.length - 1); i++) {
        // Taking the data from the row at position i
        var rdata = header[i].split(',');
        var obj = { };
        for (var j = 0; j < jobs.length; j++) {
            obj[jobs[j]] = rdata[j];
        }
        result.push(obj);
    }
    jsonstring = JSON.stringify(result);
    fs.writeFile('out/data.json', jsonstring, (err1) => {
        if (err1) throw err1;
    });
});
