import * as fs from 'fs';
import * as http from 'http';

let jdata = 0;
let jsonstring;

// Webserver
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
}).listen(3000);
console.log('Server is listening on 3000');

// Reading Jobs from file
fs.readFile('res/test', 'utf8', (err, data) => {
    if (err) throw err;
    jdata = data.toString().split(',');
    jsonstring = JSON.stringify(jdata).split("\\n");
    fs.writeFile('res/data.json', jsonstring);
    console.log(jsonstring);
});

// Parsing data to array