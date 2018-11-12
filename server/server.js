const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const todo = require('./routes/todo')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.json())

server.use('/api/v1/todo', todo)

// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'))
// })

module.exports = server
