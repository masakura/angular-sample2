'use strict';

/**
 * @ngdoc function
 * @name angularSample2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularSample2App
 */
angular.module('angularSample2App')
  .controller('MainCtrl', function ($scope, todoService) {
    $scope.todos = todoService.getTodos();

    $scope.addTodo = function () {
      todoService.add($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      todoService.removeAt(index);
    };
  });
