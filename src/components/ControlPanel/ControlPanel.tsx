import React from 'react'
import styled from 'styled-components'

import { increment, decrement, reset } from 'store/counter/counterActions'
import { useActions } from 'store/useActions'

export const ControlPanel = (): JSX.Element => {
  const {
    increment,
    decrement,
    reset
  } = useActions(actions)

  return (
    <Wrapper>
      <Button onClick={decrement}> - </Button>
      <Button onClick={reset}> Reset </Button>
      <Button onClick={increment}> + </Button>
    </Wrapper>
  )
}

const actions = {
  increment,
  decrement,
  reset
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`

const Button = styled.button`
  flex: 1 0 0px;

  &:not(:last-child) {
    margin-right: 16px;
  }
`