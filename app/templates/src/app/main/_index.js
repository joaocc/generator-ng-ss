'use strict';
/*jshint esnext: true */
import MainCtrl from './controllers/main.controller';
import GithubContributorService from '../components/githubContributor/githubContributor.service';
import WebDevTecService from '../components/webDevTec/webDevTec.service';
import NavbarDirective from '../components/navbar/navbar.directive';
import MalarkeyDirective from '../components/malarkey/malarkey.directive';
<% if (props.router.key !== 'none') { %>
import routerConfig from '../index.route';
<% } %>
//module: import

angular.module('<%- appName %>.main',
    [
        //module: inject
    ])
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .service('githubContributor', GithubContributorService)
    .service('webDevTec', WebDevTecService)
    .controller('MainCtrl', MainCtrl)
    .directive('acmeNavbar', () => new NavbarDirective())
    .directive('acmeMalarkey', () => new MalarkeyDirective(malarkey))
<% if (props.router.key !== 'none') { %>
    .config(routerConfig)
<% } %>
;