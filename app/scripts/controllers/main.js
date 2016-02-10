'use strict';

/**
 * @ngdoc function
 * @name assignment5App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assignment5App
 */
angular.module('assignment5App')
  .controller("MainCtrl", function($scope, $http) {
  	$http.get('/tutorials.json').success(function(data){
  		$scope.tutorials = data;
  	})
  });
