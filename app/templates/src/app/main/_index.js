'use strict';
/*jshint esnext: true */
import MainCtrl from './controllers/main.controller';
//module: import

angular.module('<%- appName %>.main',
    [
        //module: inject
    ])

    .controller('MainCtrl', MainCtrl)

    .config(function ($stateProvider) {
        $stateProvider
            .state('<%- appName %>.main', {
                url: '/',
                templateUrl: 'app/main/views/main.html',
                controller: 'MainCtrl'
            });
    });