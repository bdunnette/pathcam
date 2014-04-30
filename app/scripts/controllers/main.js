'use strict';

angular.module('pathcamApp')
  .controller('MainCtrl', function ($scope, $rootScope, $routeParams) {
    $rootScope.selectedCamera = null;
  });
