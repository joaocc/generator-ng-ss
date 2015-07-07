'use strict';
var BaseSubgenerator = require('../base');
var _ = require('underscore.string');

module.exports = BaseSubgenerator.extend({

    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: 'Module'
        });

        this.log('You called the GulpAngular subgenerator with the argument ' + this.name + '.');
    },

    _createController: function (renderOptions) {
        this.composeWith('ng-ss:controller', { 
            args: [renderOptions.name],
            options: {
                path: renderOptions.path + '/' + this.scaffoldSettings.name
            }
        });
    },

    _createView: function (renderOptions) {
        this.composeWith('ng-ss:view', { 
            args: [renderOptions.name],
            options: {
                path: renderOptions.path + '/' + this.scaffoldSettings.name
            }
        });
    },

    _createStyle: function (renderOptions) {
        this.composeWith('ng-ss:style', { 
            args: [renderOptions.name],
            options: {
                path: renderOptions.path + '/' + this.scaffoldSettings.name
            }
        });
    },

    _generateRenderOptions: function () {
        var ext = '.html';

        this.scaffoldSettings.templateUrl = [
            'app',
            this.scaffoldSettings.name,
            this.scaffoldSettings.path,
            'views',
            this.scaffoldSettings.name + ext
        ].filter(this._filterCallback).join('/');

        return this.scaffoldSettings;
    },

    writing: function () {
        this._generateSettings();

        this._createController(this.scaffoldSettings);
        this._createView(this.scaffoldSettings);
        this._createStyle(this.scaffoldSettings);

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
    }

});
