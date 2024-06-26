var app = angular.module('mainApplication', []);

app.controller('mainController', function($scope) {
  $scope.firstName = "";
  $scope.lastName = "";
  $scope.fullName = function() {
    return $scope.firstName + " " + $scope.lastName;
  };
});
