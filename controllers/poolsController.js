// require db to use models
let db = require('../models');

// setup functions for end-points
function index(req, res) {
  // this will return all POOLS
  console.log('This route shows all Pools.');

  // Find all objects in the database that are in the Pool Schema.
  db.Pool.find({}, function(err, pool) {

    if (err) {
      console.log("Error", err);
    }
    res.json(pool);
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
