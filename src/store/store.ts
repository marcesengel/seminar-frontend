import { createStore, applyMiddleware, combineReducers } from 'redux'
import counterReducer from './counter/counterReducer'
import { createLogger } from 'redux-logger'

const rootReducer = combineReducers({
  counter: counterReducer
})
export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, applyMiddleware(
  createLogger()
))