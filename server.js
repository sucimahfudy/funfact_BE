var http = require('http');
var app = require('./app');
var hostname = '127.0.0.1';
var port = process.env.PORT || 3001;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
