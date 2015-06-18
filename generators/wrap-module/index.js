'use strict';
var BaseSubgenerator = require('../base');

module.exports = BaseSubgenerator.extend({
    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: 'The subgenerator name'
        });

        this._getConfig();
        this._generateSettings();


        // this.log(this._initMessage);
        // this.log('You called the GulpAngular subgenerator with the argument ' + this.name + '.');
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
        // this.scaffoldSettings = {
        //     name: _.decapitalize(this.name),
        //     capitalizeName: _.capitalize(this.name),
        //     pathArr: pathArr,
        //     fullPath: 'src/app/' + pathArr.join('/'),
        //     context: pathArr.join('.'),
        //     path: pathArr.join('/')
        // }
        var moduleArr = [
            this.appName
        ];
        this.log(this.scaffoldSettings)
       
        return this.scaffoldSettings;
    }
});