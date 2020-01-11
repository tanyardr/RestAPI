const express = require('express')

module.exports = function(server){
	//API routes
	const router = express.Router()
	server.use('./api', router)

	//registering api methods in router
	const itemService = require('../api/itens/itemService')
	itemService.register(router, '/item')
}