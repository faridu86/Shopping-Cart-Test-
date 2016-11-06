var Promise = require("bluebird")
, assert = require('assert')
, faker = require('faker');

exports.products = function( req, res) {
  var productCount = 10; 
  var products = [];
  
  for(var i=0; i<productCount; i++) { 
    products.push({
      id: faker.random.uuid(), 
      name: faker.commerce.productName(), 
      price: faker.commerce.price(), 
      image: faker.image.image(), 
      description: faker.lorem.sentence()
    }); 
  }

  res.format({
    html: function() {
        res.render("app", { products: products})
      },
      json: function() {
        res.status(200).send({ products: products});
      }
    });
};

exports.cart = function( req, res) {

};

exports.addToCart = function( req, res) {

};

exports.removeFromCart = function( req, res) {

};