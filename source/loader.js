const server = require('./serverFiles/server')
require('./serverFiles/database')
require('./serverFiles/routes')(server)