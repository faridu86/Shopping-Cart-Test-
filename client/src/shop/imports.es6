'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'angular-ui-bootstrap';

import ShopStyles from './styles/shop.styl';

import ShopCtrl from './controllers/shop.controller.es6';

import ShopService from './services/shop.service.es6';

let controllers = { ShopCtrl};

let components = {};

let services = { ShopService};

let filters = {};

export { controllers, components, services, filters};