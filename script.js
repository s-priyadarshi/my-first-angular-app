var app = angular.module('mainApplication', []);

app.controller('mainController', function($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
  $scope.fullName = function() {
    return $scope.firstName + " " + $scope.lastName;
  };
});