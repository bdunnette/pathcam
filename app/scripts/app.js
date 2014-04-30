'use strict';

angular
  .module('pathcamApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/camera/:cameraId', {
        templateUrl: 'views/camera.html',
        controller: 'CameraCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope, $resource) {
    $rootScope.cameras = {};
    var Camera = $resource('/cameras.json')
      , cameras = Camera.query(function () {
          $rootScope.cameras = cameras;
        });
  });
