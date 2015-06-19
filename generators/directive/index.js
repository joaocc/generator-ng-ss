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

    // _createController: function (renderOptions) {
    //     this.composeWith('gulp-angular:controller', { 
    //         args: [renderOptions.name],
    //         options: {
    //             path: renderOptions.path + '/' + this.scaffoldSettings.name
    //         }
    //     });
    // },

    // _createView: function (renderOptions) {
    //     this.composeWith('gulp-angular:view', { 
    //         args: [renderOptions.name],
    //         options: {
    //             path: renderOptions.path + '/' + this.scaffoldSettings.name
    //         }
    //     });
    // },

    // _createStyle: function (renderOptions) {
    //     this.composeWith('gulp-angular:style', { 
    //         args: [renderOptions.name],
    //         options: {
    //             path: renderOptions.path + '/' + this.scaffoldSettings.name
    //         }
    //     });
    // },

    _generateRenderOptions: function () {
        // var path = this._pathParser(this.options.path);
        // this.scaffoldSettings.controllerName = this.scaffoldSettings.name
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
        // var subfolder = (this.options.nowrap) ? '/' : '/directives/';


        // this._createController(this.scaffoldSettings);
        // this._createView(this.scaffoldSettings);
        // this._createStyle(this.scaffoldSettings);
        // this._copyTpl(
        //     'directive.es6',
        //     [
        //         this.scaffoldSettings.fullPath,
        //         subfolder,
        //         this.scaffoldSettings.name,
        //         '.directive.js'
        //     ].join(''),
        //     this._generateRenderOptions()
        // );

        this._generateDirective();
        this._generateSpec();

        // this._require();
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
