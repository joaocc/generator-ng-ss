describe('MainCtrl', function () {

    beforeEach(module('<%- appName %>'));

    it('should define more than 2 awesome things', inject(function ($controller) {
        var vm = $controller('MainCtrl');

        expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
        expect(vm.awesomeThings.length > 2).toBeTruthy();
    }));
});
