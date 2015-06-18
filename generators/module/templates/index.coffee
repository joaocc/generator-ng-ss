<%= capitalizeName %> = require('./controllers/<%= name %>.controller')

angular.module('<%= moduleName %>',
  [   
    //module: inject
    'ui.router',
    'ui.bootstrap'
  ])
  .controller('<%= capitalizeName %>Ctrl', <%= capitalizeName %>Ctrl)
  
  .config(($stateProvider) ->
    $stateProvider
    .state('<%= context %>.<%= name %>',
      url: '/<%= name %>'
      templateUrl: 'app/<%= path %>/views/<%= name %>.html'
      controller: '<%= capitalizeName %>Ctrl'
    );
  );