var express = require('express');
var path = require('path');
var app = express();
const config = require('./app/config');
const src = require('./app/src');

let jsonstring;
var date = new Date();

app.use(express.static('view'));
app.use('/node', express.static(path.join(__dirname,'/node_modules/angular/')));
app.use('/app', express.static(path.join(__dirname, '/app/')));
app.use('/out', express.static(path.join(__dirname, '/out/')));

var server = app.listen(config.app.port, function () {
    console.log('INFO: Server started at ' + src.currTime() + " on port " + config.app.port);
});
src.formatData();
// Format the data.json every 15 Seconds
setInterval(src.formatData, 14899);
