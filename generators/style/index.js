'use strict';
var BaseSubgenerator = require('../base');

module.exports = BaseSubgenerator.extend({

    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: 'Style'
        });
        this._generateSettings();

        this.log('You called the GulpAngular subgenerator with the argument ' + this.name + '.');
    },

    writing: function() {
        var cssPreprocessor = this.projConfig.cssPreprocessor,
            format = '.' + cssPreprocessor.extension,
            subfolder = (this.options.nowrap) ? '/' : '/styles/';

        this._copyTpl(
            'style.css',
            [
                this.scaffoldSettings.fullPath,
                subfolder,
                this.scaffoldSettings.name,
                format
            ].join(''),
            this._generateRenderOptions()
        );

        this._injectStyle();
    },

    _generateRenderOptions: function () {
        return {
            name: this.scaffoldSettings.capitalizeName
        };
    }

});