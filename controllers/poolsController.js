// require db to use models

let db = require('../models');

// setup functions for end-points
function index (req, res) {
  // this will return all POOLS
  console.log('This route shows all Pools.');
  res.json();
}

function show (req, res) {
  // this will return a pool by ID.
  console.log('This route shows one pool by ID');
  res.json();
}


// controllers/albumsController.js
module.exports = {
  index: index,
  show: show
};
