'use strict';

/**
 * @ngdoc function
 * @name angularSample2App.controller:StatisticsCtrl
 * @description
 * # StatisticsCtrl
 * Controller of the angularSample2App
 */
angular.module('angularSample2App')
  .controller('StatisticsCtrl', function ($scope, todoService) {
    $scope.info = todoService.getStatistics();
  });
