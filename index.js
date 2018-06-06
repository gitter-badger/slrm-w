// Add for production release > #!/usr/bin/env nodejs
var express = require('express');
var path = require('path');
var app = express();
const config = require('./app/config');
const src = require('./app/src');

let jsonstring;

app.use(express.static('view'));
app.use('/node', express.static(path.join(__dirname,'/node_modules/angular/')));
app.use('/app', express.static(path.join(__dirname, '/app/')));
app.use('/out', express.static(path.join(__dirname, '/out/')));

var server = app.listen(config.app.port, function () {
    console.log('INFO: Server started at ' + src.currTime() + " on port " + config.app.port);
});

src.formatData();

// Reread the squeue_text every config.app.refresh seconds (needs to be defined)
setInterval(src.formatData, config.app.refresh);
