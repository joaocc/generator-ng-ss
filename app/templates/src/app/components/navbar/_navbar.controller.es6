class NavbarCtrl {
    constructor (moment) {
        'ngInject';

        // "this.creation" is avaible by directive option "bindToController: true"
        this.relativeDate = moment(this.creationDate).fromNow();
    }
}

export default NavbarCtrl;