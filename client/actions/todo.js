import request from 'superagent'

export const GET_TODOS_PENDING = 'GET_TODOS_PENDING'
export const GET_TODOS = 'GET_TODOS'
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR'

export const getTodosPendng = () => ({type: GET_TODOS_PENDING})

export const getTodosList = todo => ({
  type: GET_TODOS,
  todo
})

export const getTodosError = error => ({
  type: GET_TODOS_ERROR,
  error
})

// GET TODO
export function getTodos () {
  // eslint-disable-next-line no-console
  console.log('action')
  return (dispatch) => {
    dispatch(getTodosPendng())
    return request
      .get(`/api/v1/todos`)
      .then(res => {
        dispatch(getTodosList(res.body.result))
        // eslint-disable-next-line no-console
        console.log('success')
      })
      .catch(err => {
        dispatch(getTodosError(err.message))
      })
  }
}

// DELETE TODO
// export function deleteTodo (id) {
//   return (dispatch) => {
//     dispatch(getTodoPendng())
//     return request
//       .delete(`/api/v1/todo/${id}`)
//       .then(res => {
//         dispatch(getTodoList(res.body.result))
//         dispatch(getTodo())
//         // eslint-disable-next-line no-console
//         console.log('deleting your todo')
//       })
//       .catch(err => {
//         dispatch(getTodoError(err.message))
//       })
//   }
// }

// ADD TODO
export function addTodo (todo) {
  console.log(todo, 'action')
  return (dispatch) => {
    dispatch(getTodosPendng())
    return request
      .post(`/api/v1/todos`, todo)
      .then(res => {
        dispatch(getTodosList(res.body.result))
        dispatch(getTodos())
        // eslint-disable-next-line no-console
        console.log('adding your todo')
      })
      .catch(err => {
        dispatch(getTodosError(err.message))
      })
  }
}

// EDIT TODO
// export function editTodo (todo, id) {
//   return (dispatch) => {
//     dispatch(getTodoPendng())
//     return request
//       .put(`/api/v1/todo/edittodo/${id}`, todo)
//       .then(res => {
//         dispatch(getTodoList(res.body.result))
//         dispatch(getTodo())
//         // eslint-disable-next-line no-console
//         console.log('edited your todo')
//       })
//       .catch(err => {
//         dispatch(getTodoError(err.message))
//       })
//   }
// }
