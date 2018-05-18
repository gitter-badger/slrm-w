var fs = require('fs');

var jobs = fs.readFile('out/data.json', 'utf-8', (err, data) => {
    if (err) throw err;
});

angular.module('slrm', [].controller('slrmctrl', function ($scope) {
    $scope.data = jobs.data;
}));
