'use strict';
var BaseSubgenerator = require('../base');

module.exports = BaseSubgenerator.extend({

    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: 'View'
        });
        this._generateSettings();

        this.log('You called the GulpAngular subgenerator with the argument ' + this.name + '.');
    },

    writing: function() {
        var htmlPreprocessorSettings = this.config.get('props').htmlPreprocessor,
            format = '.' + htmlPreprocessorSettings.extension,
            subfolder = (this.options.nowrap) ? '/' : '/views/';

        this._copyTpl(
            'index' + format,
            [
                this.scaffoldSettings.fullPath,
                subfolder,
                this.scaffoldSettings.name,
                format
            ].join(''),
            this._generateRenderOptions()
        );
    },

    _generateRenderOptions: function () {
        return {
            name: this.scaffoldSettings.capitalizeName
        };
    }

});