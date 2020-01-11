//door of communication
const port = 4000
//middleware to interpretation of requisitions
const bodyParser = require('body-parser')
//framework web
const express = require('express')
//instance of express
const server = express()

//middlewares for performing requests
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(process.env.PORT || port, function (){
	console.log('Listening on');
})

module.exports = server