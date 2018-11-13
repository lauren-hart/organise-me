exports.up = (knex, Promise) => {
  return knex.schema.createTable('todos', function (t) {
    t.increments('id')
    t.string('todo')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('todos')
}
