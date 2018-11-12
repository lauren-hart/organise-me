import {
  GET_TODO_PENDING,
  GET_TODO,
  GET_TODO_ERROR
}
  from '../actions/todo'

const defaultState = {
  bets: null,
  error: null,
  pending: false
}

export default function (state = defaultState, {error, todo, type}) {
  switch (type) {
    case GET_TODO_PENDING:
      return Object.assign({}, state, {error: null, pending: true})

      // return {
      //   ...state,
      //   error: null,
      //   pending: true
      // }

    case GET_TODO:
      return Object.assign({}, state, {error: null, pending: false, todo})

      // return {
      //   ...state,
      //   TODO,
      //   error: null,
      //   pending: false
      // }

    case GET_TODO_ERROR:
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
