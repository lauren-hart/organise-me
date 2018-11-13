import {
  GET_TODOS_PENDING,
  GET_TODOS,
  GET_TODOS_ERROR
}
  from '../actions/todo'

const defaultState = {
  todos: null,
  error: null,
  pending: false
}

export default function (state = defaultState, {error, todos, type}) {
  switch (type) {
    case GET_TODOS_PENDING:
      return Object.assign({}, state, {error: null, pending: true})

      // return {
      //   ...state,
      //   error: null,
      //   pending: true
      // }

    case GET_TODOS:
      return Object.assign({}, state, {error: null, pending: false, todos})

      // return {
      //   ...state,
      //   TODO,
      //   error: null,
      //   pending: false
      // }

    case GET_TODOS_ERROR:
      return Object.assign({}, state, {error, pending: false, todos: null})

      // return {
      //   ...state,
      //   TODO: null,
      //   error,
      //   pending: false
      // }

    default:
      return state
  }
}
