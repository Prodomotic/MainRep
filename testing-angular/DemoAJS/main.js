angular
    .module("myApp", [])
    .controller("myCtrl", ["$scope", "$http", function($scope, $http) {
        $scope.name = "Francisco..";
        $scope.daticos = [];

        $scope.clicksito = function() {
            $scope.name = "Santiago..";
            $http.get("https://jsonplaceholder.typicode.com/posts").then(response => {
                $scope.daticos = response.data;
            }).catch(console.error);
        };
    }]);