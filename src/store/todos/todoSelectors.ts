import { RootState } from 'store/store'
import { Todo } from './todoTypes'
import { createSelector } from 'reselect'

const notUndefined = <T>(value: T): value is Exclude<T, undefined> =>
  typeof value !== 'undefined'

export const getTodos = createSelector([
  (state: RootState) => state.todos.entities
], (entities): Todo[] => Object.values(entities)
  .filter(notUndefined)
)