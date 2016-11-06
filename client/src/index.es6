'use strict';

import 'angular';
import 'angular-ui-router';
import RoutesConfig from "./routes.es6";

console.log('hellp')
class dc {
  constructor() {
    console.log( 'charta bacho');
    angular
    .module('dc', ['shop'])
    .config(RoutesConfig);
  }
}

new dc