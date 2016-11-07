'use strict'

let ShopService = function( $http){
  let service = this;
  service.products = [];
  service.cart = [];

  service.setup = ( products) => {
    service.products = products;
  }

  service.getProducts = () => {
    return service.products;
  }

  service.getProduct = ( productId) => {
    return _.find(service.products, ( product) => {
      return product.id == productId;
    });
  }

  service.addToCart = ( productId) => {
    let product = service.getProduct( productId);
    $http.post("/cart/add-item", product).then( (response)=>{
      service.cart.push( product);  
    })    
  }

  service.isInCart = ( id) => {
    return !!_.find( service.cart, ( product) => { return product.id == id } );
  }
  
  service.removeFromCart = ( productId) => {
    $http.delete(`/cart/remove-item/${productId}`).then( (response)=>{
      _.remove( service.cart, ( product) => { return product.id == productId } );
    });
  }

  service.getTotal = () => {
    return _.sum( _.pluck( service.cart, 'price'));
  }

};

export default ShopService;