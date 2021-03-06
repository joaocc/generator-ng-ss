'use strict';
var BaseSubgenerator = require('../base');

module.exports = BaseSubgenerator.extend({

    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: 'Controller'
        });

        this._generateSettings();
        this.log('You called the GulpAngular subgenerator(CONTROLLER) with the argument ' + this.name + '.');
    },

    writing: function() {
        this.fileFormat = this.projConfig.jsPreprocessor.extension;
        this.sourceFormat = this.projConfig.jsPreprocessor.srcExtension;
        this._generateController();
        this._generateSpec();

    },

    _generateRenderOptions: function () {
        return {
            name: this.scaffoldSettings.capitalizeName,
            appName: this.appName,
            specName: this.scaffoldSettings.capitalizeName + 'Ctrl'
        };
    },

    _generateController: function () {
        var subfolder = (this.options.nowrap) ? '/' : '/controllers/';

        this._copyTpl(
            'controller.' + this.sourceFormat,
            [
                this.scaffoldSettings.fullPath,
                subfolder,
                this.scaffoldSettings.name,
                '.controller.',
                this.fileFormat
            ].join(''),
            this._generateRenderOptions()
        );
    },

    _generateSpec: function () {
        var subfolder = (this.options.nowrap) ? '/' : '/spec/';

        this._copyTpl(
            'spec.es6',
            [
                this.scaffoldSettings.fullPath,
                subfolder,
                this.scaffoldSettings.name,
                '.controller.spec.js'
            ].join(''),
            this._generateRenderOptions()
        );
    }

});