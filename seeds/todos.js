exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 4401, todo: 'Washing'},
        {id: 4402, todo: 'Cook Dinner'},
        {id: 4403, todo: 'Have a shower'},
        {id: 4404, todo: 'Go to the gym'}
      ])
    })
}
