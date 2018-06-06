/**
 * @prettier
 */

angular.module('slrm', []);

/*
/// OLD VERSION 05-2018 ///
angular.module('slrm').controller('slrmctrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('/out/data.json')
        .then(function (response) {
            $scope.data = response.data;
        });
}]);
*/

angular.module('slrm').controller('slrmctrl', [
    '$scope',
    '$http',
    '$timeout',
    function($scope, $http, $timeout) {
        // Sec (15 Seconds)
        $scope.refreshInterval = 15;

        $scope.getData = function() {
            $http.get('/out/data.json').then(function(response) {
                $scope.data = response.data;

                return $timeout($scope.getData, $scope.getTimeLeftToRefresh());
            });
        };

        $scope.getTimeLeftToRefresh = function() {
            var now = new Date();
            var timeLeftToRefresh =
                ($scope.refreshInterval -
                    ((now.getMinutes() * 60 + now.getSeconds()) % $scope.refreshInterval)) *
                1000;

            return timeLeftToRefresh;
        };

        // Initial call to start the loop
        $scope.getData();
    }
]);
