import * as api from 'api/todos'
import { Todo, TodoData, ActionType, FetchAction, CreateAction, DeleteAction, EditAction } from './todoTypes'

export const fetchTodos = (): FetchAction => ({
  type: ActionType.Fetch,
  payload: api.fetchTodos()
})

export const createTodo = (data: TodoData): CreateAction => ({
  type: ActionType.Create,
  payload: api.createTodo(data)
})

export const editTodo = (todoId: Todo['id'], data: Partial<TodoData>): EditAction => ({
  type: ActionType.Edit,
  payload: api.editTodo(todoId, data)
})

export const deleteTodo = (todoId: Todo['id']): DeleteAction => ({
  type: ActionType.Delete,
  payload: api.deleteTodo(todoId)
    .then(() => todoId)
})