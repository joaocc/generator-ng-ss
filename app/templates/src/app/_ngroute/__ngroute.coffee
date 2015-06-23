angular.module "<%- appName %>"
  .config ($routeProvider) ->
    $routeProvider
      .when "/",
        templateUrl: "app/main/views/main.html"
        controller: "MainCtrl"
        controllerAs: "main"
      .otherwise
        redirectTo: "/"
