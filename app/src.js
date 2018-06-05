var fs = require('fs');
var path = require('path');

module.exports = {
    // Reads the squeue_text file and formats it to .json object and writes data.json
    formatData : function () {
        // Reading Jobs from file
        fs.readFile ('out/squeue_text', 'utf8', (err, data) => {
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
            fs.writeFile ('out/data.json', jsonstring, (err1) => {
                if (err1) throw err1;
                console.log('INFO: data format completed.');
            });
        });
    },

    // Returns the current time formatted for germany
    currTime : function () {
        var date = new Date();
        var options = { day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit"};
        return date.toLocaleDateString ('de-DE', options);
    }
};
