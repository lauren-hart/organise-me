const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTodos,
  deleteTodo,
  addTodo,
  editTodo
}

// GET todos from database
function getTodos (testDb) {
  const db = testDb || connection
  return db('todos')
    .select()
}

// DELETE todo from database by id
function deleteTodo (id, testDb) {
  const db = testDb || connection
  return db('todos')
    .where('id', id)
    .del()
}

// ADD todo to database
function addTodo (todo, testDb) {
  const db = testDb || connection
  return db('todos')
    .insert({
      todo: todo.todo
    })
}

// PUT edit todo from database by id
function editTodo (id, todo, testDb) {
  const db = testDb || connection
  return db('todos')
    .where('id', id)
    .update({
      todo: todo.todo
    })
}
