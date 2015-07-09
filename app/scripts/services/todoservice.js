'use strict';

/**
 * @ngdoc service
 * @name angularSample2App.todoService
 * @description
 * # todoService
 * Factory in the angularSample2App.
 */
angular.module('angularSample2App')
  .factory('todoService', function () {
    var todos = [];
    var statistics = {};

    var refreshStatistics = function () {
      statistics.count = todos.length;
    };
    refreshStatistics();

    return {
      getTodos: function () {
        return todos;
      },
      add: function (text) {
        todos.push({text: text});

        // 統計を更新
        refreshStatistics();
      },
      removeAt: function (index) {
        todos.splice(index, 1);

        // 統計を更新
        refreshStatistics();
      },
      getStatistics: function () {
        return statistics;
      }
    };
  });
