var express = require('express');

// Create server
var app = express();
app.enable('jsonp callback');

// Routes
app.get('/test', function(req, res) {
  res.jsonp({ response: 'hello' });
});

// Run server
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});