'use strict'

let ShopService = function( $http){
  this.products = [];
  this.cart = [];

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
    let product = this.getProduct( productId);
    this.cart.push( product);
  }

  this.isInCart = ( id) => {
    return !!_.find( this.cart, ( product) => { return product.id == id } );
  }
  
  this.removeFromCart = ( productId) => {
    _.remove( this.cart, ( product) => { return product.id == productId } );
  }

  this.getTotal = () => {
    return _.sum( _.pluck( this.cart, 'price'));
  }

};

export default ShopService;