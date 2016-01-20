/* Fill out these functions using Mongoose queries*/
var Listings = require('ListingSchema.js');
var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   Listings.find().where('name').gt('Library West').exec(function(err, listing){
     if(err), throw err;
     console.log(listing);
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listings.find().where('code').gt('CABL').exec(function(err, listing){
     if(err), throw err;
      console.log(listing);
     listing.remove(function(err){
       if(err) throw err;
     });
   });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   Listings.findOneAndUpdate({code: 'PHL'}, {address: 'Phelps Lab, Gainesville, FL 32603'},function(err, listing){
     if (err) throw err;
     console.log(listing);
   });
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listings.find({}, function(err, listing){
     if(err) throw err;
     console.log(listing);
  });
}

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
