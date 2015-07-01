import MalarkeyCtrl from  './malarkey.controller';

class MalarkeyDirective {
  constructor (malarkey) {
    'ngInject';

    let directive = {
      restrict: 'E',
      scope: {
          extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyCtrl,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      let watcher;
      let typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });

      el.addClass('acme-malarkey');

      angular.forEach(scope.extraValues, (value) => {
        typist.type(value).pause().delete();
      });

      watcher = scope.$watch('vm.contributors', () => {
        angular.forEach(vm.contributors, (contributor) => {
          typist.type(contributor.login).pause().delete();
        });
      });

      scope.$on('$destroy', () => {
        watcher();
      });
    }

  }
}

export default MalarkeyDirective;
