'use strict'

let ShopService = function( $http){
  this.products = null;

  this.setup = ( products) => {
    this.products = products;
  }

  this.getProducts = () => {
    return this.products;
  }

  this.getProduct = ( productId) => {
    return _.find(this.products, ( product) => {
      return product.id == productId;
    });
  }

  this.addToCart = ( productId) => {

  }

  this.removeFromCart = ( productId) => {
    
  }

};

export default ShopService;