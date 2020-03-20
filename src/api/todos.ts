import axios from 'axios'

const buildTodo = (todo: TodoResponse): Todo => ({
  ...todo,
  createdAt: new Date(todo.createdAt)
})

export const fetchTodos = (): Promise<Todo[]> =>
  axios.get<TodoResponse[]>('http://localhost:3000/todos')
    .then((response) => response.data)
    .then((todos) => todos.map(buildTodo))

export type TodoData = Omit<Todo, 'id' | 'createdAt'>;
export const createTodo = (data: TodoData): Promise<Todo> =>
  axios.post<TodoResponse>('http://localhost:3000/todos', data)
    .then((response) => response.data)
    .then(buildTodo)
  
export const editTodo = (todoId: Todo['id'], data: Partial<TodoData>): Promise<Todo> =>
  axios.patch<TodoResponse>(`http://localhost:3000/todos/${todoId}`, data)
    .then((response) => response.data)
    .then(buildTodo)

export const deleteTodo = (todoId: Todo['id']): Promise<void> =>
  axios.delete(`http://localhost:3000/todos/${todoId}`)

export enum TodoStatus {
  Open = 'OPEN',
  Active = 'ACTIVE',
  Done = 'DONE'
}

interface TodoResponse {
  id: string;
  text: string;
  createdAt: string;
  status: TodoStatus;
}

export interface Todo extends Omit<TodoResponse, 'createdAt'> {
  createdAt: Date;
}