var fs = require('fs');
var express = require('express');
var app = express();

let jsonstring;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/view/index.html');
});

var server =  app.listen(3000, function() {
  console.log('Server is running an listening on port:3000');
});


// Reading Jobs from file
fs.readFile('out/test', 'utf8', (err, data) => {
  if (err) throw err;

  var header = data.split('\n');
  var jobs = header[0].split(',');
  var result=[];

  //reading data from the 2nd row
  for(var i=1;i<(header.length -1);i++)
  {
    //taking the data from the row at position i
    var rdata = header[i].split(',');
    var obj={};
    for(var j=0;j<jobs.length;j++)
    {
      obj[jobs[j]]=rdata[j];
    }
    result.push(obj);
  }
  jsonstring = JSON.stringify(result);
  fs.writeFile('out/data.json', jsonstring, (err) => {
    if (err) throw err;
  });
});
