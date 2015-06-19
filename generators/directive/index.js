'use strict';
var BaseSubgenerator = require('../base');
var _ = require('underscore.string');

module.exports = BaseSubgenerator.extend({

    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: 'The subgenerator name'
        });

        this._generateSettings();
        this.log('You called the GulpAngular subgenerator with the argument ' + this.name + '.');
    },

    _generateRenderOptions: function () {
        var tpl = this.options.tpl ? this.scaffoldSettings.name : false;

        return {
            moduleName: this.appName,
            name: this.scaffoldSettings.name,
            templateUrl: tpl,
            controller: this.options.controller,
            capitalizeName: this.scaffoldSettings.capitalizeName
        };
    },

    writing: function () {
        this._generateDirective();
        this._generateSpec();
    },

    _generateDirective: function() {
        var subfolder = (this.options.nowrap) ? '/' : '/directives/';

        this._copyTpl(
            'directive.es6',
            [
                this.scaffoldSettings.fullPath,
                subfolder,
                this.scaffoldSettings.name,
                '.directive.js'
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
                '.directive.spec.js'
            ].join(''),
            this._generateRenderOptions()
        );
    }

});
