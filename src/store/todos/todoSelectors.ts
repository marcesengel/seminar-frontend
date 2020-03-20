import { RootState } from 'store/store'
import { Todo, State } from './todoTypes'
import { createSelector } from 'reselect'

const notUndefined = <T>(value: T): value is Exclude<T, undefined> =>
  typeof value !== 'undefined'

export const getTodos = createSelector([
  (state: RootState) => state.todos.entities
], (entities): Todo[] => Object.values(entities)
  .filter(notUndefined)
)

export const getFilteredTodos = createSelector([
  (state: RootState) => state.todos.entities,
  (state: RootState, filter: keyof State['filters']) => state.todos.filters[filter]
], (entities, todoIds): Todo[] => todoIds
  .map((id) => {
    const todo = entities[id]
    if (typeof todo === 'undefined') {
      throw new Error('Invalid todo id in filter.')
    }

    return todo
  })
)