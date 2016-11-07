'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'angular-ui-bootstrap';

import ShopStyles from './style/shop.styl';

import ShopCtrl from './controllers/shop.controller.es6';
import ProductCtrl from './controllers/shop.product.controller.es6';

import ShopService from './services/shop.service.es6';

import ShopMenu from './components/menu/shop.menu.component.es6';

let controllers = { ShopCtrl, ProductCtrl};

let components = { ShopMenu};

let services = { ShopService};

let filters = {};

export { controllers, components, services, filters};