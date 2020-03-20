import * as api from 'api/todos'
import { Todo, ActionType, FetchAction, DeleteAction } from './todoTypes'

export const fetchTodos = (): FetchAction => ({
  type: ActionType.Fetch,
  payload: api.fetchTodos()
})

export const deleteTodo = (todoId: Todo['id']): DeleteAction => ({
  type: ActionType.Delete,
  payload: api.deleteTodo(todoId)
    .then(() => todoId)
})