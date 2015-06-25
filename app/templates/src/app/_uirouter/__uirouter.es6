function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
