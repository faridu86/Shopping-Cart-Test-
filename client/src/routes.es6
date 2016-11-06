'use strict';

let config = /*@ngInject*/ ($stateProvider, $sceProvider, $urlRouterProvider) => {
  $sceProvider.enabled(false);
  
  /** Medications routes **/
  $stateProvider
  .state('products', {
    url: '/products',
    templateUrl: './html/main-view.html',
    controller: function(){ console.log('hello')},
    controllerAs: 'ctrl',
  })
  .state('products.view', {
    url: '/',
    templateUrl: './html/products-view.html',
    controller: 'ShopCtrl',
    controllerAs: 'ctrl',
  })
  .state('products.item', {
    url: '/:product_id',
    templateUrl: './html/single-product-view.html',
    controller: 'ShopCtrl',
    controllerAs: 'ctrl',
  })
  .state('/products.cart', {
    url: '/cart',
    templateUrl: './html/cart-view.html',
    controller: 'ShopCtrl',
    controllerAs: 'ctrl',
  });

  $urlRouterProvider.otherwise('/products/');
}

export default config