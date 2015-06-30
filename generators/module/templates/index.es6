'use strict';
/*jshint esnext: true */

import <%= capitalizeName %>Ctrl from './controllers/<%= name %>.controller';

angular.module('<%= moduleName %>',
        [   
            //module: inject
            'ui.router',
            'ui.bootstrap'
        ]
    )
    .controller('<%= capitalizeName %>Ctrl', <%= capitalizeName %>Ctrl)
<% if (router === 'ui.router') { %>
    .config(function ($stateProvider) {
        $stateProvider
            .state('<%= context %>.<%= name %>', {
                url: '/<%= name %>',
                templateUrl: '<%= templateUrl %>',
                controller: '<%= capitalizeName %>Ctrl'
            });
    })
<% } else if(router === 'ngRouter') { %>
    .config(function ($routeProvider) {
        $routeProvider
            .when('/<%= name %>', {;
                templateUrl: '<%= templateUrl %>',
                controller: '<%= capitalizeName %>Ctrl'
            });
    })
<% } %>;