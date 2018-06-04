angular.module('slrm', []);

angular.module('slrm').controller('slrmctrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('/out/data.json')
        .then(function (response) {
            $scope.data = response.data;
        });
}]);

/*
angular.module('slrm').controller('slrmctrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    $scope.refreshInterval = 900; // Sec (15 Minutes)

    $scope.getData = function () {
        $http.get('/out/data.json')
            .then(function(response) {
                $scope.data = response.data;

                return $timeout($scope.getData, $scope.getTimeLeftToRefresh());
            });
    };

    $scope.getTimeLeftToRefresh = function () {
        var now = new Date();
        var timeLeftToRefresh = ($scope.refreshInterval - (now.getMinutes() * 60 + now.getSeconds()) % $scope.refreshInterval) * 1000;

        return timeLeftToRefresh;
    };

    // Initial call to start the loop
    $timeout($scope.getData, $scope.getTimeLeftToRefresh());

}]);
*/
