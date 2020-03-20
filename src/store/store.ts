import { createStore, applyMiddleware, combineReducers } from 'redux'
import counterReducer from './counter/counterReducer'
import todoReducer from './todos/todoReducer'

import { createLogger } from 'redux-logger'

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer
})
export type RootState = ReturnType<typeof rootReducer>;

const promiseMiddleware = () => (next: any) => (action: any) => {
  if (typeof action.payload === 'object' && typeof action.payload.then === 'function') {
    return action.payload
      .then((data: any) => next({ ...action, payload: data }))
  } else {
    return next(action)
  }
} 

export default createStore(rootReducer, applyMiddleware(
  promiseMiddleware,
  createLogger()
))