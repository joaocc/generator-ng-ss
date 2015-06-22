'use strict';
var BaseSubgenerator = require('../base');
var _ = require('underscore.string');

module.exports = BaseSubgenerator.extend({

    components: [
        'view',
        'controller',
        'directive',
        'style'
    ],

    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: 'The subgenerator name'
        });

        this.log('You called the GulpAngular subgenerator with the argument ' + this.name + '.');
    },

    _createDirective: function () {
        this.composeWith('ng-ss:directive', {
            args: [this.scaffoldSettings.name],
            options: {
                nowrap: true,
                tpl: true,
                path: 'components/' + this.scaffoldSettings.name,
                controller: true
            }
        });
    },

    _createController: function () {
        this.composeWith('ng-ss:controller', { 
            args: [this.scaffoldSettings.name],
            options: {
                nowrap: true,
                norequire: true,
                path: 'components/' + this.scaffoldSettings.name
            }
        });
    },

    _createView: function () {
        this.composeWith('ng-ss:view', { 
            args: [this.scaffoldSettings.name],
            options: {
                nowrap: true,
                path: 'components/' + this.scaffoldSettings.name
            }
        });
    },

    _createStyle: function () {
        this.composeWith('ng-ss:style', { 
            args: [this.scaffoldSettings.name],
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
        var components;

        this._generateSettings();

        if (this.options.exclude) {
            return this._parseExcluding();
        }
        
        if (!this.options.include) {
            components = this.components;
        }

        this._parseIncludings(components);
    },

    _parseIncludings: function (components) {
        components = (components) ? components.join(',') : this.options.include;
        this._parseSelectedComponents(components, this._includeCallback);
    },

    _parseExcluding: function() {
        var components = this.options.exclude;
        this._parseSelectedComponents(components, this._excludeCallback);
    },

    _includeCallback: function (components, el) {
        return ~components.indexOf(el);
    },

    _excludeCallback: function (components, el) {
        return components.indexOf(el) === -1;
    },

    _parseSelectedComponents: function (components, callback) {
        components = components.split(',').filter(this._filterCallback);

        this.components.forEach(function (el) {
            var method = '_create' + _.capitalize(el);

            if (callback(components, el)) {
                this[method]();
            }
        }, this);
    }

});
