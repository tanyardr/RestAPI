//simple node server for communication test
const express = require('express');
const bodyParser = require('body-parser');


const port = 3000;
server = express();


server.listen(process.env.PORT || port, function (){
	console.log('Listening on');
})


server.get('/', function (req, res) {
  //res.sendFile(__dirname + '/index.html');
  res.render('index', {});
});

