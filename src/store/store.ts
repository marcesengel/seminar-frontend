import { createStore, applyMiddleware } from 'redux'
import counterReducer from './counter/counterReducer'
import { createLogger } from 'redux-logger'

const rootReducer = counterReducer
export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, applyMiddleware(
  createLogger()
))