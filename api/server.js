const express = require("express")

const carsRouter = require('./cars/cars-router')

const server = express()

server.use(express.json())

server.use('/api/cars', carsRouter)

server.get('/', (req, res) => {
  res.json({ up: 'Welcome to the node-db2-project api' })
})

module.exports = server
