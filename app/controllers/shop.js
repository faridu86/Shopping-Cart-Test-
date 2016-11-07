var Promise = require("bluebird")
, assert = require('assert')
, faker = require('faker');

exports.products = function( req, res) {
  var productCount = 10; 
  var products = [];
  
  global.db.connect().then( function(db){
    var collection = db.collection('cart');
    collection.deleteMany({}, function(err, r) {
      assert.equal(null, err);
      global.db.close(db);
    });
  });
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
  global.db.connect().then( function(db){
    var collection = db.collection('cart');
    collection.find({}).toArray( function( err, cart) {
      assert.equal(null, err);
      res.send( cart);
    });
  });
}; 

exports.addToCart = function( req, res) {
  global.db.connect().then( function(db){
    var collection = db.collection('cart');
    collection.insertOne( req.body, function( err, r){
      assert.equal(null, err);
      res.send( req.body);
      global.db.close(db);
    });
  })
};

exports.removeFromCart = function( req, res) {
  global.db.connect().then( function(db){
    var collection = db.collection('cart');
    collection.deleteOne( {id: req.params.id}, function( err, r){
      assert.equal(null, err);
      res.send( req.params.id);
      global.db.close(db);
    });
  })
};