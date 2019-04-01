(function(){
  'use strict';

  angular
      .module('shineEbsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
    'angularjs-datetime-picker'
      ])
      .config(configConfig)
      .run(run)
      

  configConfig.$inject = ['$locationProvider','$routeProvider'];

  function configConfig($locationProvider,$routeProvider) {
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
    .when('/createuser', {
      templateUrl: 'views/user/createUser.view.html',
      controller: 'userCreateController',
      controllerAs: 'userCreateController'
    })
    .when('/login', {
      templateUrl: 'views/login/login.view.html',
      controller: 'loginController',
      controllerAs: 'loginController'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
  }
  run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
  function run($rootScope, $location, $cookies, $http) {
      // keep user logged in after page refresh
      $rootScope.globals = $cookies.getObject('globals') || {};
      if ($rootScope.globals.currentUser) {
          $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
      }

      $rootScope.$on('$locationChangeStart', function (event, next, current) {
          // redirect to login page if not logged in and trying to access a restricted page
          var restrictedPage = $.inArray($location.path(), ['/login']) === -1;
          var loggedIn = $rootScope.globals.currentUser;
          if (restrictedPage && !loggedIn) {
              //$location.path('/login');
              $rootScope.logInOrNot = false;
          }
      });
  }
}());


// angular.module('myApp', ['ngRoute']).config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/myCtrl', {
//         templateUrl: 'myView.html',
//         controller: 'myCtrl',
//         resolve: {
//         load: function (myhttpserv) {
//             return myhttpserv;
//         }
//       });
//   }]);