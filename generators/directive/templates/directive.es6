'use strict';
/*jshint esnext: true */

angular.module('<%= moduleName %>', []).
    directive('<%= name %>', function () {
        return {
            <% if (templateUrl) {%>templateUrl: <%= templateUrl %><% } %>
        };
    });