'use strict';

import { controllers, components, services, filters } from './imports.es6';

class ShopApp {
  constructor() {
    angular
    .module('shop', ['ui.router', 'ui.bootstrap'])
    .controller('ShopCtrl', controllers.ShopCtrl)
    .controller('ProductCtrl', controllers.ProductCtrl)
    .service('ShopService', services.ShopService)
    .component('shopMenu', components.ShopMenu)
    .run(($templateCache) => {
      $templateCache.put('./html/products-view.html', require('./html/products-view.html'));
      $templateCache.put('./html/single-product-view.html', require('./html/single-product-view.html'));
      $templateCache.put('./html/cart-view.html', require('./html/cart-view.html'));
      $templateCache.put('./components/menu/shop.menu.html', require('./components/menu/shop.menu.html'));
    });
  }
}

new ShopApp