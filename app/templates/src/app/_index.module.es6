/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';
import runBlock from './index.run';

import './main';
//module: import

angular.module('<%- appName %>', [<%- modulesDependencies %>, '<%- appName %>.main'])
  .config(config)
  .run(runBlock)
;
