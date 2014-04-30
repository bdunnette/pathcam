'use strict';

angular.module('pathcamApp')
  .controller('CameraCtrl', function ($scope, $rootScope, $routeParams) {
    $rootScope.selectedCamera = $routeParams.cameraId;
    $scope.camera = $rootScope.cameras[$routeParams.cameraId];
    $scope.dummyString = Date.parse(new Date());
  });
