// SERVER-SIDE JAVASCRIPT

//require express in our app
let express = require('express');
// generate a new express app and call it 'app'
let app = express();
let bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

// import controllers
let controllers = require('./controllers');

// routes

app.get('/', function(req, res) {

  res.sendFile('views/index.html', {
    root: __dirname
  });
  console.log(__dirname);
});

// documentation route
app.get('/api', controllers.api.index);

// Pool routes
app.get('/api/pools', controllers.pools.index);
app.get('/api/pools/:id', controllers.pools.show);
app.post('/api/pools', controllers.pools.create);
app.delete('/api/pools/:id', controllers.pools.destroy);

// Events routes
app.post('/api/pools/:poolId/events', controllers.events.create);



/**********
 * SERVER *
 **********/

app.listen(process.env.PORT || 3000, function() {
  console.log("Express Server is up and running on http://localhost:3000/");
});
