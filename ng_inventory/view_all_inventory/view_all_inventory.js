'use strict';

angular.module('myApp.viewAllInv', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewAllInv', {
    templateUrl: 'view_all_inventory/view_all_inventory.html',
    controller: 'ViewAllInvCtrl'
  });
}])

.controller('ViewAllInvCtrl', function($scope) {
  $scope.inventory_items = [
    {name: 'beef', amount: '2 lb'},
    {name: 'broccoli', amount: '1.5 lb'}
  ];
});