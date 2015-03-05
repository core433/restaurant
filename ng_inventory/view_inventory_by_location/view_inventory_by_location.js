'use strict';

angular.module('myApp.viewInvByLoc', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewInvByLoc', {
    templateUrl: 'view_inventory_by_location/view_inventory_by_location.html',
    controller: 'ViewInvByLocCtrl'
  });
}])

.controller('ViewInvByLocCtrl', [function() {

}]);