'use strict';
/*jshint esnext: true */

class <%= name %>Ctrl {
    constructor ($scope) {
        console.log($scope);
    }
}

<%= name %>Ctrl.$inject = ['$scope'];

export default <%= name %>Ctrl;
