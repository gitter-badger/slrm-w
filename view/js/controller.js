angular.module('slrm', []);

angular.module('slrm').controller('slrmctrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('/out/data.json')
        .then(function (response) {
            $scope.data = response.data;
        });
}]);
