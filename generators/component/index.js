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

        this.log('You called the GulpAngular subgenerator with the argument ' + this.name + '.');
    },

    _createDirective: function (renderOptions) {
        this.composeWith('ng-ss:directive', {
            args: [renderOptions.name],
            options: {
                nowrap: true,
                tpl: true,
                path: 'components/' + this.scaffoldSettings.name,
                controller: true
            }
        });
    },

    _createController: function (renderOptions) {
        this.composeWith('ng-ss:controller', { 
            args: [renderOptions.name],
            options: {
                nowrap: true,
                norequire: true,
                path: 'components/' + this.scaffoldSettings.name
            }
        });
    },

    _createView: function (renderOptions) {
        this.composeWith('ng-ss:view', { 
            args: [renderOptions.name],
            options: {
                nowrap: true,
                path: 'components/' + this.scaffoldSettings.name
            }
        });
    },

    _createStyle: function (renderOptions) {
        this.composeWith('ng-ss:style', { 
            args: [renderOptions.name],
            options: {
                nowrap: true,
                path: 'components/' + this.scaffoldSettings.name
            }
        });
    },

    _generateRenderOptions: function () {
        return this.scaffoldSettings;
    },

    writing: function () {
        this._generateSettings();

        this._createController(this.scaffoldSettings);
        this._createDirective(this.scaffoldSettings);
        this._createView(this.scaffoldSettings);
        this._createStyle(this.scaffoldSettings);
    }

});
