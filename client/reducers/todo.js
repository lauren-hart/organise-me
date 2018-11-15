import {
  GET_TODOS_PENDING,
  GET_TODOS,
  GET_TODOS_ERROR
}
  from '../actions/todo'

const defaultState = {
  todo: null,
  error: null,
  pending: false
}

export default function (state = defaultState, {error, todo, type}) {
  switch (type) {
    case GET_TODOS_PENDING:
      return Object.assign({}, state, {error: null, pending: true})

      // return {
      //   ...state,
      //   error: null,
      //   pending: true
      // }

    case GET_TODOS:
      return Object.assign({}, state, {error: null, pending: false, todo})

      // return {
      //   ...state,
      //   TODO,
      //   error: null,
      //   pending: false
      // }

    case GET_TODOS_ERROR:
      return Object.assign({}, state, {error, pending: false, todo: null})

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
