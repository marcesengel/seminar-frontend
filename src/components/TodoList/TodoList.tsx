import React, { useEffect } from 'react'
import Todo from './Todo'

import { useSelector } from 'react-redux'
import { useActions } from 'store/useActions'
import { getTodos, fetchTodos } from 'store/todos'

export const TodoList = React.memo((): JSX.Element => {
  const todos = useSelector(getTodos)

  const { fetchTodos } = useActions(actions)
  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <React.Fragment>
      {
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))
      }
    </React.Fragment>
  )
})

const actions = {
  fetchTodos
}