'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config'),
    temp = {};

/* Connect to your database */
  mongoose.connect(config.db.uri);
/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */

 fs.readFile('listings.json', 'utf8', function(err, data){
    temp = JSON.parse(data).entries;
  //  console.log(temp);
  for (var i = 0; i < temp.length; i++){
    console.log(temp[i]);
    (new Listing(temp[i])).save(function(err){
      if (err) throw err;
    });
  }
});



/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
