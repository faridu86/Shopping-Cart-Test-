'use strict';

import 'angular';
import 'angular-ui-router';
import RoutesConfig from "./routes.es6";

console.log('hellp')
class DevCrew {
  constructor() {
    console.log( 'charta bacho');
    angular
    .module('devcrew', ['shop'])
    .config(RoutesConfig);
  }
}

new DevCrew