//simple node server for communication test
const http = require('http');
const fs = require('fs');

const port = 8080;

http.createServer(function (req, res) { 
	fs.readFile('demoDb.html', function (err, data) {
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write(data)
		res.end()
	});

}).listen(port);


