module <%- appName %> {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/main/views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        });

      $urlRouterProvider.otherwise('/');
    }

  }
}
