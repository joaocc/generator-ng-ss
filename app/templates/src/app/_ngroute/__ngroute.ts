module <%- appName %> {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($routeProvider: ng.route.IRouteProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/main/views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  }
}
