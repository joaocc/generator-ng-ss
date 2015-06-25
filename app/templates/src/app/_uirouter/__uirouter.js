(function() {
  'use strict';

  angular
    .module('<%- appName %>')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
