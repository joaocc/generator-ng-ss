'use strict';
var BaseSubgenerator = require('../base');

module.exports = BaseSubgenerator.extend({
    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: 'Wrap-module'
        });

        this._getConfig();
        this._generateSettings();

        this.log('You called the GulpAngular subgenerator with the argument ' + this.name + '.');
    },

    writing: function () {
        this._copyTpl(
            'index.es6',
            [
                this.scaffoldSettings.fullPath,
                this.scaffoldSettings.name,
                'index.js'
            ].join('/'),
            this._generateRenderOptions()
        );

        this._require();
    },

    _generateRenderOptions: function () {
        return this.scaffoldSettings;
    }
});