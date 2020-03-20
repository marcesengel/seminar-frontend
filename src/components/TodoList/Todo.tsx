import React, { useCallback } from 'react'
import styled from 'styled-components'

import { useActions } from 'store/useActions' 
import { Todo, deleteTodo } from 'store/todos'

interface Props {
  todo: Todo;
}

export default ({ todo }: Props): JSX.Element => {
  const { deleteTodo } = useActions(actions)
  const handleDeleteClick = useCallback(() => {
    deleteTodo(todo.id)
  }, [ todo.id, deleteTodo ])

  return (
    <Wrapper>
      <Text>{ todo.text }</Text>
  
      <button onClick={handleDeleteClick}>Löschen</button>
    </Wrapper>
  )
}

const actions = {
  deleteTodo
}

const Wrapper = styled.div`
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding: 12px 16px;
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

const Text = styled.span``