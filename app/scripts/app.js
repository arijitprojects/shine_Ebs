'use strict';

/**
 * @ngdoc overview
 * @name shineEbsApp
 * @description
 * # shineEbsApp
 *
 * Main module of the application.
 */
angular
  .module('shineEbsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($locationProvider,$routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/organization', {
        templateUrl: 'views/organization/organization.view.html',
        controller: 'organizationController',
        controllerAs: 'organizationController'
      })
      .when('/branch', {
        templateUrl: 'views/branch/branch.view.html',
        controller: 'branchController',
        controllerAs: 'branchController'
      })
      .when('/profile', {
        templateUrl: 'views/profile/profile.view.html',
        controller: 'profileController',
        controllerAs: 'profileController'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);

  });
