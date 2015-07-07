'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

xdescribe('GulpAngular:generators/component', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../../generators/component'))
      //.withArguments('name')
      //.withOptions({ 'skip-install': true })
      .on('end', done);
  });

  it('creates files', function (done) {
    assert.file([
      'somefile.js'
    ]);
  });
});
