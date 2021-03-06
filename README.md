# generator-ng-ss

Offers you a Yeoman generator to initiate a Web application with Angular powered by GulpJS.

![Logo](app/templates/src/assets/images/SoftServe.png)

## Architecture

![Logo](app/templates/src/assets/images/ng-ss.jpg)

## Why generator-ng-ss ?
This is a fork for [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular).  

This generator combines the best features of other generators like [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular), [generator-angular](https://github.com/yeoman/generator-angular), [ngTailor](https://github.com/lauterry/generator-ngtailor) and [generator-gulp-webapp](https://github.com/yeoman/generator-gulp-webapp) into an optimal workflow for starting applications with AngularJS powered by Gulp!

generator-ng-ss scaffolds an AngularJS application with a full-featured gulpfile.js, giving you immediate out-of-the-box access to all tasks for modern web development.


My intention is to create a generator that gives users total control over their development toolbox so they can immediately start projects with their preferred tools, such as specific UI frameworks or JavaScript preprocessors.

This project is one of many things that you can use to get started on a new app.  For a comparison of the options and the trade-offs between them, please visit [this](http://www.dancancro.com/comparison-of-angularjs-application-starters) link.

## Usage

### Create your project

Install the required tools: `yo`, `gulp`, `bower`
```
npm install -g yo gulp bower
```

Install `generator-ng-ss`:
```
npm install -g generator-ng-ss
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo ng-ss`, optionally passing an app name:
```
yo ng-ss [app-name]
```

### Yo options
`yo ng-ss --help` or `yo ng-ss -h` for help. All options are not required. If not provided, default values will be used.

* `--app-path='src'` customize Angular's app folder, relative to cwd, default is `src`
* `--dist-path='dist'` customize build target folder, relative to cwd, default is `dist`
* `--e2e-path='e2e'` customize e2e test specs folder, relative to cwd, default is `e2e`
* `--tmp-path='.tmp'` customize pre-processing temp folder, relative to cwd, default is `.tmp`
* `--skip-install` do not run `bower install` and `npm install` after generating the app, default is `false` (not skip)
* `--skip-welcome-message` skip yo welcome messages, default is `false` (not skip)
* `--skip-message` skip install messages, default is `false` (not skip)
* `--default` use default configurations, default is `false`
* `--advanced` prompt for advanced additional features, default is `false`


Paths configuration are stored in `gulpfile.js`. Change `options.(src|dist|tmp|e2e)` in `gulpfile.js` if you want to config paths after the app is generated.

**Warning**: The paths are also written in the `index.html` for the build with useref. If you want to change these paths, you also have to change the paths there in order to have the build task working.

### Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

More information on the gulp tasks in [this README.md](app/templates/gulp/README.md).

## Directory structure

[Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)

The root directory generated for a app with name `gulpAngular` :
<pre>

├── bower.json

├── e2e

├── gulp

├── gulpfile.js

├── karma.conf.js

├── npm-debug.log

├── package.json

├── protractor.conf.js

└── src

│   ├── app

│   │   ├── components

│   │   │   ├── githubContributor

│   │   │   ├── malarkey

│   │   │   ├── navbar

│   │   │   │   ├── navbar.controller.js

│   │   │   │   ├── navbar.directive.js

│   │   │   │   ├── navbar.html

│   │   │   │   └── navbar.less

│   │   │   └── webDevTec

│   │   ├── index.config.js

│   │   ├── index.less

│   │   ├── index.module.js

│   │   ├── index.route.js

│   │   ├── index.run.js

│   │   ├── main

│   │   │   ├── controllers

│   │   │   │   └── main.controller.js

│   │   │   ├── index.js

│   │   │   ├── spec

│   │   │   │   └── main.controller.spec.js

│   │   │   ├── styles

│   │   │   │   └── main.less

│   │   │   └── views

│   │   │       └── main.html

│   │   └── vendor.less

│   ├── assets

│   │   └── images

│   ├── favicon.ico

│   └── index.html

</pre>

16 directories, 50 files

## Sub-generators
Also you can use sub-generators for creating program modules, components, etc.
All of command should enter in main project folder.

### wrap-module
Wrap-module is module which includes others wrap-modules or modules.

```
yo ng-ss:wrap-module <name> --path=<path>
```
For example, let's create module with name `quest` in `main` module
```
yo ng-ss:wrap-module quest --path=main
```
It will create `index.js` file in folder `app/main/quest`, also this file will be including in `index.js` in `app/main` 
folder.  
If path is empty, it will be create in `app` folder and including into `index.module.js`

### module
```
yo ng-ss:module <name> --path=<path>
```
For example, lets create `gold` in `quest` module
```
yo ng-ss:module gold --path=main/quest
```

It will create next structure:  
`app/main/quest/gold/index.js`  
`app/main/quest/gold/controllers/gold.controller.js`  
`app/main/quest/gold/spec/gold.controller.spec.js`  
`app/main/quest/gold/views/gold.html`  
`app/main/quest/gold/styles/gold.less`  

Also `gold` module will be including into quest module, and parts of `gold` module will be including in 
`app/main/quest/gold/index.js` too.

### component
```
yo ng-ss:component <name> --include=<partsOfComponent> --exclude=<partsOfComponent>
```

`include` and `exclude` isn't mandatory parameters. If you don't enter it, generator will create all parts of component.

### available parts of component
* `view`
* `style` 
* `directive` 
* `controller`

Also if you generate directive and controller together, controller will be included into directive.  

This generator creates new component in `components` with next structure
`app/components/<name>/<name>.controller.js`  
`app/components/<name>/<name>.controller.spec.js`  
`app/components/<name>/<name>.directive.js`   
`app/components/<name>/<name>.directive.spec.js`   
`app/components/<name>/<name>.less`   
`app/components/<name>/<name>.html`   

Also you can choose components which will be include or exclude from list of generating files.  
For example
```
yo ng-ss:component test --include=view,controller
```
or
```
yo ng-ss:component test --exclude=style,directive
```

## Features included in the gulpfile
* *useref* : allow configuration of your files in comments of your HTML file
* *ngAnnotate* : convert simple injection to complete syntax to be minification proof
* *uglify* : optimize all your JavaScript
* *csso* : optimize all your CSS
* *rev* : add a hash in the file names to prevent browser cache problems
* *watch* : watch your source files and recompile them automatically
* *jshint* : JavaScript code linter
* *imagemin* : all your images will be optimized at build
* *Unit test (karma)* : out of the box unit test configuration with karma
* *e2e test (protractor)* : out of the box e2e test configuration with protractor
* *browser sync* : full-featured development web server with livereload and devices sync
* *angular-templatecache* : all HTML partials will be converted to JS to be bundled in the application
* **TODO** lazy : don't process files which haven't changed when possible

## Questions the generator will ask
* *jQuery*: jQuery 1.x, 2.x, Zepto, none
* *Angular modules*: animate, cookies, touch, sanitize
* *Resource handler*: ngResource, Restangular, none
* *Router*: ngRoute, UI Router, none
* *UI Framework*: Bootstrap, Foundation, Angular Material, none (depends on the chosen CSS preprocessor)
* *UI directives* : UI Bootstrap, Angular Strap, official Bootstrap JavaScript, Angular Foundation, official Foundation JavaScript, none (depends on the UI framework)
* *CSS pre-processor*: Less, Sass
* *JS preprocessor*: ECMAScript 6 (Traceur and Babel)
* *HTML preprocessor*: none
* **TODO** Script loader: Require, Webpack, none
* **TODO** Test framework: Jasmine, Mocha, Qunit

## License
MIT
