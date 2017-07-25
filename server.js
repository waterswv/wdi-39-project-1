// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// routes

app.get('/', function (req, res) {

  res.sendFile('views/index.html', {root:__dirname});
    console.log(__dirname);
});





/**********
 * SERVER *
 **********/

app.listen(process.env.PORT || 3000, function (){
  console.log("Express Server is up and running on http://localhost:3000/");
});
