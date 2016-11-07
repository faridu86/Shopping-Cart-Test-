'use strict';

import 'angular';
import 'angular-ui-router';

import _ from 'lodash';

import RoutesConfig from './routes.es6';
import ShoppingCart from './shop/app.es6';

class dc {
  constructor() {
    angular
    .module('dc', ['shop'])
    .config(RoutesConfig);
  }
}

new dc