class <%= name %>Ctrl
  constructor: ($scope) ->
    console.log($scope)

<%= name %>Ctrl.$inject = ['$scope']

exports.<%= name %>Ctrl = <%= name %>Ctrl