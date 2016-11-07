var path = require('path')
, controllers = require(path.join(global.config.root, 'app/controllers'));

module.exports = function (app) {
  app.get('/', controllers.shop.products);
  app.get('/cart', controllers.shop.cart);
  app.post('/cart/add-item', controllers.shop.addToCart);
  app.delete('/cart/remove-item/:id', controllers.shop.removeFromCart);
}