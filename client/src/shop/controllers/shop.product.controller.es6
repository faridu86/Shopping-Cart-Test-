'use strict';

class ProductCtrl {
  constructor (ShopService, $stateParams) {
    let ctrl = this;
    _.extend( ctrl, ShopService);
    ctrl.product = ctrl.getProduct( $stateParams.product_id);
  }
}

export default ProductCtrl;