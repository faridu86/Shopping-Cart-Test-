global.config = require('./config/main');
global.db = require('./config/connection');

var express = require('express')
, app = express()
, MongoClient = require('mongodb').MongoClient
, assert = require('assert');

app.get('/', function (req, res) {

  global.db.connect().then( function(db){
    
    db.collection("cart").find({}).toArray( function( err, docs){
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      global.db.close(db);
    });
    res.send("hello mongo");

  });
  
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
