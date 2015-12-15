var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Connect to server
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sky');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// Setup routes
var api_router = require('./app/routes/api_routes');
var app_router = express.Router();

app_router.route('/')
  .get(function(request, response) {
    response.sendFile(__dirname + "/public/index.html");
  });

// REGISTER OUR ROUTES -------------------------------
// all routes will be prefixed with /api
app.use('/api', api_router);
app.use('/', app_router);
// Serve static files in public folder
app.use(express.static(__dirname + '/public'));

// START SERVER
// =============================================================================
app.listen(port);
console.log('Listening on port ' + port);
