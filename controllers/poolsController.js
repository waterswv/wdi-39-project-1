// require db to use models
let db = require('../models');
var GoogleMapsAPI = require('googlemaps');

// importing google maps:
var publicConfig = {
  key: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg',
  stagger_time:       1000, // for elevationPath
  encode_polylines:   false,
  secure:             true, // use https
  //proxy:              'http://127.0.0.1:9999' // optional, set a proxy for HTTP requests
};
var gmAPI = new GoogleMapsAPI(publicConfig);

// setup functions for end-points
function index(req, res) {
  // this will return all POOLS
  console.log('This route shows all Pools.');

  // Find all objects in the database that are in the Pool Schema.
  db.Pool.find({}, function(err, pools) {

    if (err) {
      console.log("Error", err);
    }
    pools.forEach(function (pool) {
      //  if (pools.maps.lat == null) {
          // geocode API
          var geocodeParams = {
            "address": pool.address,
          };

          gmAPI.geocode(geocodeParams, function(err, result){
            console.log("the result is ", result);
            console.log("the latitude is ", result.results[0].geometry.location.lat);
            console.log("the longitude is ", result.results[0].geometry.location.lng);
            pool.maps.lat = result.results[0].geometry.location.lat;
            pool.maps.long = result.results[0].geometry.location.lng;
            pool.save();
          });

        //}
      });
    res.json(pools);
  });
}

function show(req, res) {
  // this will return a pool by ID.
  console.log('This route shows one pool by ID');

  // take id from url parameter & find Pool object to pass to callback
  db.Pool.findById(req.params.id, function(err, pool) {
    if (err) {
      console.log("Error finding ID", err);
    }
    res.json(pool);
  });

}

function create(req, res) {
  //this will create a new pool
  // retrieve data from parameters passed from client-browser
  db.Pool.create(req.body, function (err, pool) {
    if (err){
      console.log('unable to create new pool error', err);
    }
    res.json(pool);
  })
}

function destroy(req, res) {
  // Log what is happening with this route
  console.log('This route deletes one pool by ID', req.params.id);

  // find db record by id from paramter passed in url string & remove it from the DB
  db.Pool.findOneAndRemove({_id: req.params.id}, function (err, pool) {
    //log error messaging
    if (err) {
      console.log('Unable to find ID error', err);
    }

    // respond with the the object that was removed
    res.json(pool);
  });
}

// controllers/poolsController.js
module.exports = {
  index: index,
  show: show,
  create: create,
  destroy: destroy
};
