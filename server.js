var express = require('express');
var request = require('request');

// Create server
var app = express();
app.enable('jsonp callback');

// Routes
app.get('/:method/', function(req, res) {
  var options = {
    url: 'http://www.random.org' + req.originalUrl,
    method: 'GET'
  };

  request(options, function(e, r, b) {
    if (!e && r.statusCode == 200) {
      res.jsonp({
        request: req.originalUrl,
        response: b
      });
    }
    else {
      res.jsonp({
        request: req.originalUrl,
        error: true,
        status: r.statusCode,
        response: e
      });
    }
  });
});

// Run server
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});