var express = require('express');
var request = require('request');

// Create server
var app = express();
app.enable('jsonp callback');

// Simple page explainer
app.get('/', function(req, res) {
  res.set('Content-Type', 'text/plain');
  res.send('This is a dead simple proxy for Random.org API (http://www.random.org/clients/http/) so that JSON(P) can be used. \r\n\
\r\n\
\r\n\
For example: \r\n\
  http://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new \r\n\
is equivalent to \r\n\
  ' + req.host + '/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new \r\n\
and the JSONP version is \r\n\
  ' + req.host + '/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new&callback=jsonp_is_great \r\n\
\r\n\
\r\n\
Please note that Random.org does throttle its API and may ban this IP address, so please do not abuse. \r\n\
\r\n\
Enjoy. \r\n\
https://github.com/zzolo/random-proxy');
});

// Proxy
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