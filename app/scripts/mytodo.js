'use strict';

angular.module('mytodo', [
								'ngAnimate',
								'ngCookies',
								'ngTouch',
								'ngSanitize',
								'ngResource',
								'ngRoute',
								'ui.sortable',
								'LocalStorageModule'
							])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
