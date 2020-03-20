import { combineReducers } from 'redux'
import { State } from './todoTypes'

import { entitiesReducer } from './todoEntitiesReducer'
import { filtersReducer } from './todoFiltersReducer'

export default combineReducers<State>({
  entities: entitiesReducer,
  filters: filtersReducer
})