const express = require('express')
const db = require('../db')
const router = express.Router()
router.use(express.json())

// GET ROUTES (get todos)

router.get('/', (req, res) => {
  db.getTodos()
    .then(result => {
      res.json({result})
    })
})

// POST ROUTES (add new todo)
router.post('/', (req, res) => {
  console.log(req.body, 'routes todo')
  const todo = req.body
  db.addTodo(todo)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' +
      err.message)
    })
})

// DELETE ROUTES (delete todo by id)
// router.delete('/:id', (req, res) => {
//   const todoId = req.params.id
//   db.deleteTodos(todoId)
//     .then(() => {
//       res.json({})
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' +
//       err.message)
//     })
// })

// PUT ROUTE (edit todo)
// router.put('/edittodo/:id', (req, res) => {
//   const id = req.params.id
//   const todo = req.body
//   db.editTodo(id, todo)
//     .then(todo => {
//     /* eslint-disable no-console */
//       console.log('sending back edited todo')
//       res.json({todo})
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' +
//       err.message)
//     })
// })

module.exports = router
