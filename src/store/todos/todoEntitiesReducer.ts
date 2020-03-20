import { ActionType, Action, State } from './todoTypes'
import { Reducer } from 'redux'
import produce from 'immer'

const reducer: Reducer<State['entities'], Action> = (state = {}, action) => {
  switch(action.type) {
    case ActionType.Fetch:
      const entities: State['entities'] = {}

      for (const todo of action.payload) {
        entities[todo.id] = todo
      }

      return entities
    
    case ActionType.Delete:
      return produce(state, (entities) => {
        delete entities[action.payload]
      })
    
    default:
      return state
  }
}

export default reducer