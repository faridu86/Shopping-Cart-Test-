'use strict'

class ShopMenu {
  constructor(ShopService){
    let ctrl = this;
    _.extend(ctrl, ShopService);
  }
}

let mainMenuComponent = {
  restrict: 'E',
  scope: {},
  controller: ShopMenu,
  controllerAs: 'ctrl',
  bindToController: true,
  templateUrl: './components/menu/shop.menu.html'
}

export default mainMenuComponent;