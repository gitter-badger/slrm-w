var fs = require('fs');
var http = require('http');

let jsonstring;

// Webserver
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World');
}).listen(3000);
console.log('Server is running an listening on port:3000');

// Reading Jobs from file
fs.readFile('out/test', 'utf8', (err, data) => {
  if (err) throw err;

  var header = data.split('\n');
  var jobs = header[0].split(',');
  var result=[];

  //reading data from the 2nd row
  for(var i=1;i< (header.length -1);i++)
  {
    //taking the data from the row at position i
    var rdata = header[i].split(',');
    var obj={};
    for(var j=0;j<jobs.length;j++)
    {
      obj[jobs[j]]=rdata[j]
    }
    result.push(obj);
  }
  console.log(result);
});
