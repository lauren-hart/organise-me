const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.json())

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
