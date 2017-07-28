// require mongoose & connect
let mongoose = require('mongoose');

// connect mongoose to database location to store data from end-points
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/poolapp_test" );

module.exports.Pool = require('./pool');
module.exports.Events = require('./events');
