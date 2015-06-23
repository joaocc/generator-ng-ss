angular.module "<%- appName %>"
  .config ($stateProvider, $urlRouterProvider) ->
    $stateProvider
      .state "home",
        url: "/"
        templateUrl: "app/main/view/main.html"
        controller: "MainController"
        controllerAs: "main"

    $urlRouterProvider.otherwise '/'
