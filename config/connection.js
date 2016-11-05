var MongoClient = require('mongodb').MongoClient
, assert = require('assert')
, Promise = require('bluebird');

module.exports = {
  connect: function () {
    return new Promise ( function(resolve){
      MongoClient.connect( global.config.db, function( err, db){
        assert.equal(null, err);
        console.log("Connected correctly to server");
        resolve (db);
      })  
    });
  },
  close: function(db) {
    db.close();
    console.log("Connection closed correctly to server");
  }
}

