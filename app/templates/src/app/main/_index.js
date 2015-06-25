'use strict';
/*jshint esnext: true */
import MainCtrl from './controllers/main.controller';
<% if (props.router.key !== 'none') { %>
import routerConfig from '../index.route';
<% } %>
//module: import

angular.module('<%- appName %>.main',
    [
        //module: inject
    ])

    .controller('MainCtrl', MainCtrl)

<% if (props.router.key !== 'none') { %>
    .config(routerConfig)
<% } %>

<% if (router === 'ui.router') { %>
    //.config(function ($stateProvider, $urlRouterProvider) {
    //    $stateProvider
    //        .state('home', {
    //            url: '/',
    //            templateUrl: 'app/main/views/main.html',
    //            controller: 'MainCtrl',
    //            controllerAs: 'main'
    //        });
    //
    //    $urlRouterProvider.otherwise('/');
    //});
<% } else if(router === 'ngRouter') { %>
    //.config(function ($routeProvider) {
    //    $routeProvider
    //        .when('/', {
    //            templateUrl: 'app/main/views/main.html',
    //            controller: 'MainCtrl',
    //            controllerAs: 'main'
    //        })
    //        .otherwise({
    //            redirectTo: '/'
    //        });
    //});
<% } %>