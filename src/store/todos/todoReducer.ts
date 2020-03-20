import { combineReducers } from 'redux'
import { State } from './todoTypes'

import entitiesReducer from './todoEntitiesReducer'

export default combineReducers<State>({
  entities: entitiesReducer
})