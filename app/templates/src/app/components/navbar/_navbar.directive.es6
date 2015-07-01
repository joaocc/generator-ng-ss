import NavbarCtrl from './navbar.controller';

class NavbarDirective {
    constructor() {
        'ngInject';

        let directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            scope: {
                creationDate: '='
            },
            controller: NavbarCtrl,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }
}

export default NavbarDirective;