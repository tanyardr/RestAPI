//simple node server for communication test
const http = require('http');
var fs = require('fs');

const port = 8080;

http.createServer(function (req, res) { 
	req.writeHead(200, {'Content-Type' : 'text/html'});


}).listen(8080);

server.get('/', function (req, res) {
  //res.sendFile(__dirname + '/index.html');
  res.render('index', {});
});

