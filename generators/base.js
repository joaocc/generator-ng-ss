var yeoman = require('yeoman-generator');
    _ = require('underscore.string'),
    path = require('path'),
    fs = require('fs');

module.exports = yeoman.generators.Base.extend({

    _args: [],
    _argsSettings: [],

    initializing: function () {

    },

    _generateSettings: function () {
        var pathArr = this._pathParser(this.options.path);
        var name = _.decapitalize(this.name);
        var path = pathArr.join('/');
        this._getConfig();

        this.scaffoldSettings = {
            name: name,
            capitalizeName: _.capitalize(this.name),
            pathArr: pathArr,
            fullPath: 'src/app/' + path,
            context: pathArr.join('.'),
            path: path,
            moduleName: [this.appName].concat(pathArr, name).join('.')
        };
    },

    _pathParser: function (path) {
        if (!path) return [];

        return path.split('/').filter(function (el) {
            return el;
        });
    },

    _copyTpl: function (templatePath, destinationPath, renderingData) {
        this.fs.copyTpl(
            this.templatePath(templatePath),
            this.destinationPath(destinationPath),
            renderingData
        );
    },

    _getConfig: function() {
        this.projConfig = this.config.get('props');
        this.appName = this.config.get('appName');
    },

    _importModule: function (file) {      
        var importStr = 'import \'./' + this.scaffoldSettings.name + '\';';

        if (file.indexOf(importStr) === -1) {
            file = file.replace(/\/\/module: import/, importStr + '\n//module: import');
        }

        return file;
    },

    _injectModule: function (file) {
        var injectStr = "'" + this.scaffoldSettings.moduleName + "'",
            tabs = file.match(/\s*(?=\/\/module: inject)/);
            tabs = (tabs) ? tabs[0] : '';

        if (file.indexOf(injectStr) === -1) {
            file = file.replace(/\/\/module: inject/, [
                injectStr,
                ',',
                tabs,
                '//module: inject'
            ].join(''));
        }

        return file;
    },

    _injectStyle: function () {
        var extension = this.projConfig.cssPreprocessor.extension,
            mainStyles = 'src/app/index.' + extension,
            file = this.fs.read(mainStyles),
            injectStr = [
                '@import "',
                this.scaffoldSettings.path,
                '/styles/',
                this.scaffoldSettings.name,
                '";'
            ].join('');

        if (file.indexOf(injectStr) === -1) {
            file = file.replace(/\/\/ ?endinjector/, injectStr + '\n// endinjector');
            this.fs.write(mainStyles, file);
        }
    },

    _require: function () {
        if (this.options.norequire) return;
        
        fs.stat(this.scaffoldSettings.fullPath + '/index.js', function (err) {
            var fileName = '/index.js',
                file;

            if (err) { 
                fileName = '/index.module.js';
            }

            file = this.fs.read(this.scaffoldSettings.fullPath + fileName);
            file = this._importModule(file);
            file = this._injectModule(file);
            
            this.fs.write(this.scaffoldSettings.fullPath + fileName, file);
        }.bind(this));
    },

    _filterCallback: function (el) {
        return el;
    }

});