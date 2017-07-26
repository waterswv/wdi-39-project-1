// albumsSongsController
var db = require('../models');


// POST '/api/albums/:albumId/songs'
function create(req, res) {
  db.Pool.findById(req.params.poolId, function(err, foundPool) {
    console.log(req.body);
    var newEvent = new db.Events(req.body);  // how would we validate this data?
    foundPool.events.push(newEvent);
    foundPool.save(function(err, savedPool) {
      console.log('newEvent created: ', newEvent);
      res.json(savedPool);  // responding with updated object
    });
  });
}


module.exports = {
  create: create
};
