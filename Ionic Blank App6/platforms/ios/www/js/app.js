// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp= angular.module('starter', ['ionic','ngRoute'])

myApp.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (cordova.platformId === 'ios' && window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

myApp.config(function ($routeProvider) {
    
        $routeProvider.when('/',{ 
        templateUrl: 'pages/main.html',
        controller:'mainController'
        })

        .when('/second',{
            templateUrl: 'pages/second.html',
            controller: 'secondController'
          })
        .when('/second:num',{
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
});

myApp.controller('mainController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {
    $scope.num = 'Main';
    $log.name = 'Variable from main';
    $log.info($log);
}]);
myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {
    $scope.num = $routeParams.num || 1;
    $log.second = 'Variable from second';
    $log.info($log);
}]);