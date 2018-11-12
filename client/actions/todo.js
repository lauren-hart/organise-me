import request from 'superagent'

export const GET_TODO_PENDING = 'GET_TODO_PENDING'
export const GET_TODO = 'GET_TODO'
export const GET_TODO_ERROR = 'GET_TODO_ERROR'

export const getTodoPendng = () => ({type: GET_TODO_PENDING})

export const getTodoList = TODO => ({
  type: GET_TODO,
  TODO
})

export const getTodoError = error => ({
  type: GET_TODO_ERROR,
  error
})

// GET TODO
export function getTodo () {
  return (dispatch) => {
    dispatch(getTodoPendng())
    return request
      .get(`/api/v1/todo`)
      .then(res => {
        dispatch(getTodoList(res.body.result))
        // eslint-disable-next-line no-console
        console.log('success')
      })
      .catch(err => {
        dispatch(getTodoError(err.message))
      })
  }
}

// DELETE TODO
export function deleteTodo (id) {
  return (dispatch) => {
    dispatch(getTodoPendng())
    return request
      .delete(`/api/v1/todo/${id}`)
      .then(res => {
        dispatch(getTodoList(res.body.result))
        dispatch(getTodo())
        // eslint-disable-next-line no-console
        console.log('deleting your todo')
      })
      .catch(err => {
        dispatch(getTodoError(err.message))
      })
  }
}

// ADD TODO
export function addTodo (todo) {
  return (dispatch) => {
    dispatch(getTodoPendng())
    return request
      .post(`/api/v1/todo/addtodo`, todo)
      .then(res => {
        dispatch(getTodoList(res.body.result))
        dispatch(getTodo())
        // eslint-disable-next-line no-console
        console.log('adding your todo')
      })
      .catch(err => {
        dispatch(getTodoError(err.message))
      })
  }
}

// EDIT TODO
export function editTodo (todo, id) {
  return (dispatch) => {
    dispatch(getTodoPendng())
    return request
      .put(`/api/v1/todo/edittodo/${id}`, todo)
      .then(res => {
        dispatch(getTodoList(res.body.result))
        dispatch(getTodo())
        // eslint-disable-next-line no-console
        console.log('edited your todo')
      })
      .catch(err => {
        dispatch(getTodoError(err.message))
      })
  }
}
