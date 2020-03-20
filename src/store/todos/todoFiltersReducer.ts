import { Action, ActionType, Todo, TodoStatus, State } from './todoTypes'
import { Reducer, combineReducers } from 'redux'

const createFilterReducer = (filter: (todo: Todo) => boolean): Reducer<Todo['id'][], Action> =>
  (todoIds = [], action: Action) => {
    switch (action.type) {
      case ActionType.Fetch:
        return action.payload.filter(filter).map(({ id }) => id)

      case ActionType.Create:
      case ActionType.Edit:
        const shouldBeInFilter = filter(action.payload)
        if (shouldBeInFilter === todoIds.includes(action.payload.id)) {
          return todoIds
        }

        return shouldBeInFilter
          ? todoIds.concat(action.payload.id)
          : todoIds.filter((id) => id !== action.payload.id)
      
      case ActionType.Delete:
        const updatedTodoIds = todoIds.filter((id) => id !== action.payload)
        if (todoIds.length === updatedTodoIds.length) {
          return todoIds // don't update todoIds if you don't need to
        }

        return updatedTodoIds

      default:
        return todoIds
    }
  }

export const filtersReducer: Reducer<State['filters'], Action> = combineReducers({
  open: createFilterReducer((todo) => todo.status === TodoStatus.Open),
  done: createFilterReducer((todo) => todo.status === TodoStatus.Done),
  active: createFilterReducer((todo) => todo.status === TodoStatus.Active)
})