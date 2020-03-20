import { State, Action, ActionType } from './counterTypes'
import { Reducer } from 'redux'

const defaultState: State = {
  count: 0
}

const reducer: Reducer<State, Action> = (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.Increment:
      return { count: state.count + 1 }
    
    case ActionType.Decrement:
      return { count: state.count - 1 }
    
    default:
      return state
  }
}

export default reducer