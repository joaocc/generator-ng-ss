angular.module "<%- appName %>"
  .config ($stateProvider, $urlRouterProvider) ->
    $stateProvider
      .state "home",
        url: "/"
        templateUrl: "app/main/view/main.html"
        controller: "MainCtrl"
        controllerAs: "main"

    $urlRouterProvider.otherwise '/'
