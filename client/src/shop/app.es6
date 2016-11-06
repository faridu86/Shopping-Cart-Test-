'use strict';

import { controllers, components, services, filters } from './imports.es6';

class FamilyApp {
  constructor() {
    angular
    .module('shop', ['ui.router', 'ui.bootstrap'])
    .controller('ShopCtrl', controllers.ShopCtrl)
    .service('ShopService', services.ShopService)
    .run(($templateCache) => {
      $templateCache.put('./html/main-view.html', require('./html/main-view.html'));
    });
  }
}

new FamilyApp