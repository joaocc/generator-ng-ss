'use strict';
/*jshint esnext: true */
<% if (controller) {%>import <%= capitalizeName %>Ctrl from './<%= name %>.controller'; <% } %>

angular.module('<%= moduleName %>', []).
    directive('<%= name %>', function () {
        return {
            <% if (templateUrl) { %>templateUrl: <%= templateUrl %><% } %>
        };
    });