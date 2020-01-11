//This file will contain the API methods 
//importing the item schema
const Item = require('./item')
//rest methods
Item.methods(['get', 'post', 'put', 'delete'])

Item.updateOptions({new: true, runValidators: true})

module.exports = Item