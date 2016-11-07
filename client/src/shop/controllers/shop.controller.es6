'use strict';

class ShopCtrl {
  constructor (ShopService) {
    ShopService.setup( window.params.products);
    let ctrl = this;
    _.extend( ctrl, ShopService)
  }
}

export default ShopCtrl;