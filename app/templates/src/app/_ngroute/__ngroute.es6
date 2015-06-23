function routerConfig ($routeProvider) {
  'ngInject';
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

export default routerConfig;
